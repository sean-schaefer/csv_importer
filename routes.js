var express = require('express')
var parse = require('csv-parse')
var fs = require('fs')

var router = express.Router()

router.post('/api/import', function(request, response) {
  var parseOptions = {
    delimiter: ',',
    columns: true, // attempt to autodiscover columns via CSV header
    auto_parse: true, // convert from string to native types automagically
    auto_parse_date: true
  }

  var parser = parse(parseOptions, function(err, data) {
    if (err) {
      response.status(400).send('Malformed CSV!')
    } else {
      request.db.collection('Albums').insert(data)
      response.redirect('/api/albums')
    }
  })

  fs.createReadStream(request.files.csvFile.file).pipe(parser)
})

router.get('/api/albums', function(request, response) {
  var albums = request.db.collection('Albums')
  var sortOptions = {
    sort: {
      'Release Date': 1 // 1 means ascending 'cause we're too cool for bools
    }
  }

  albums.find({}, sortOptions).toArray(function(err, documents) {
    response.json(documents)
  })
})

module.exports = router
