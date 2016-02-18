
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

module.exports = middleware;