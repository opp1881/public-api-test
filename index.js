const express = require("express");
const request = require('request');
const auth = require('./authentication');

const app = express();

app.get('/numbersearch/:number', function(req, res){
  const token = auth.createToken('', '');
  const url = `https://api.1881.no/search/v1`;

  request({
    headers: {
      'X-VK1881-API-CLIENT' : '',
      'Authorization' : token
    },
    url: `${url}/phonenumber/${req.params.number}`,
    body: req.params.number
  }, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

// Search companies
app.get('/company/:query', function(req, res){
  const token = auth.createToken('', '');
  const url = `https://api.1881.no/search/v1`;

  request({
    headers: {
      'X-VK1881-API-CLIENT' : '',
      'Authorization' : token
    },
    url: `${url}/company/?querystring=${req.params.query}`
  }, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

// Search persons
app.get('/person/:query', function(req, res){
  const token = auth.createToken('', '');
  const url = `https://api.1881.no/search/v1`;

  request({
    headers: {
      'X-VK1881-API-CLIENT' : '',
      'Authorization' : token
    },
    url: `${url}/person/?querystring=${req.params.query}`
  }, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

// Search both persons and companies
app.get('/search/:query', function(req, res){
  const token = auth.createToken('', '');
  const url = `https://api.1881.no/search/v1`;

  request({
    headers: {
      'X-VK1881-API-CLIENT' : '',
      'Authorization' : token
    },
    url: `${url}/unit/?querystring=${req.params.query}`
  }, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

// Get filters
app.get('/info/filter', function(req, res){
  const token = auth.createToken('', '');
  const url = `https://api.1881.no/search/v1`;

  request({
    headers: {
      'X-VK1881-API-CLIENT' : '',
      'Authorization' : token
    },
    url: `${url}/info/filter`
  }, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
