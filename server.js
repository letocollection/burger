var connection = require('./config/connection.js');
var orm = require('./config/orm.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
	extended: false
}));


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render(console.log("how the fuck"));

});
