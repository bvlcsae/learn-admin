'use strict'


var http = require('http');
var https = require('https');
var fs = require('fs');



var serveIndex = require('serve-index');

var express = require('express');
var app = express();

//顺序不能换
app.use(serveIndex('./public'));
app.use(express.static('./public'));

var options = {
    key  : fs.readFileSync('./cert/6082957_www.clearlove520.com.key'),
    cert : fs.readFileSync('./cert/6082957_www.clearlove520.com.pem')
}

var https_server = https.createServer(options, app);
https_server.listen(443, '0.0.0.0');


