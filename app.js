var express = require('express')
var busboy = require('express-busboy')
var routes = require('./routes')
var mongodb = require('mongodb')

var app = express()

var dbUrl = process.env.MONGODB_URI
var db
mongodb.MongoClient.connect(dbUrl, function (err, database) {
  if (err) throw err
  db = database
})

// middleware for parsing multipart (file) uploads
busboy.extend(app, {
    upload: true
})

// custom middleware to expose the db connection pool to every request
app.use(function(request, response, next) {
    request.db = db
    next()
})

app.use(express.static(__dirname + '/public'))
app.use('/', routes)

app.listen(5000, function() {
  console.log("Server running on localhost...")
})
