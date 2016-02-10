var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Type 1: In-memory only datastore (no need to load the database)
var Datastore = require('nedb')
  , db = new Datastore({filename: './error.db', autoload: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  console.log(req.body)
  db.insert(req.body, function (err, newDoc){
    console.log('Error', err)
    console.log('Written', newDoc)
  })
  res.send('Hello World!');

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
