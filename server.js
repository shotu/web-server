var express = require('express');


var app = express();
var PORT = process.env.PORT || 3000;

/*app.get('/',function(req, res){
	res.send('Hello Express');
});
*/

var middleware= require('./middleware')

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
	res.send('This is about page');
});


app.use(express.static(__dirname +'/public'));


app.listen(PORT, function () {

	console.log('Express Server started on '+" port "+PORT);
});