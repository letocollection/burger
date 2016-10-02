var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Superman1',
	database: '----'
});