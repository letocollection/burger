var connection = require('./config/connection.js');
// var orm = require('./config/orm.js');
var express = require('express');
var app = express();
var PORT = 8080;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static directory
app.use(express.static(process.cwd() + './public'));

var path = require('path');

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})



var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	// res.sendFile(path.join(__dirname + '/public/test.html'));
	connection.query('SELECT * FROM burgers;', function (err, data) {
		if (err) throw err;
		res.render('index', {
			burgers: data
			
		});
		console.log(data);
	});
});

app.get('/burgers/:id', function (req, res) {
	connection.query('SELECT * FROM burgers where id = ?', [req.params.id], function (err, data) {
		if (err) throw err;
		console.log(data);
		res.render('burgers', data[0]);
	});
});
