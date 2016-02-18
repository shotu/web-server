var express = require('express');
var app = express();
var PORT = 3000;

/*app.get('/',function(req, res){
	res.send('Hello Express');
});
*/


var middleware ={
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function  (req, res, next) {
		console.log("Reques- "+req.method + " URL:" + req.originalUrl +"Time :"+Date());
		next();
	}
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
	res.send('This is about page');
});


app.use(express.static(__dirname +'/public'));


app.listen(PORT, function () {

	console.log('Express Server started on '+"port "+PORT);
});