# csv_importer

This is a very basic Node.js app for importing Albums from a CSV file and sorting them by Release Date.

You can use the test.csv to test its functionality, or create your own CSV and :pray:.

## Hosting Information

The app has been hosted via Heroku and can be accessed here: https://fierce-meadow-96439.herokuapp.com

## Next Steps

Potential new features to add:

* Sexy UI!
* Handling alternate CSV delimiters, quoting etc.
* Allowing client to specify the sorting field + ascending vs. descending
* Identifying duplicate records (name + artist combination)
* Updating middleware to not crash and burn when client POSTs with no file
* Ability to CRUD individual records, which could lead into Users + RBAC, Authentication + Authorization, and a full-on CRUD API
