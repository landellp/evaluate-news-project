const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
var aylienAPI = require('aylien_textapi');
var textapi = new aylienAPI({
  application_id: process.env.APP_ID,
  application_key: process.env.APP_KEY
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('dist'));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8081;
}
app.listen(port); {
  console.log(`Running on localhost: ${port}`)
};

console.log(`__dirname: ${__dirname}`)
app.get('/get', function (req, res) {
  res.sendFile(path.resolve('./dist/index.html'))
});

// Aylien API
app.post('/post', function (req, res) {
  console.log('POST request received');
  console.log(req.body)
  textapi.sentiment({
    url: req.body.text,
    mode: 'document'
  }, function (error, response) {
    res.send(response)
    console.log(response)
    if (error !== null) {
      console.log('Error Details:');
      console.log(response);
    }
  })
});
module.exports = app;
