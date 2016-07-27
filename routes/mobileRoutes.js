var constants				= require('../scripts/constants');
var logger 					= require(constants.paths.scripts + '/logger');
var util 					= require(constants.paths.scripts + '/util');
var assetBuilder 			= require(constants.paths.scripts + '/assetBuilder');
var auth 					= require('./auth.js');

module.exports = function(app) {

    var activeLayout = 'layouts/mmain-mobile';

	// route to main module
	app.get('/m/main/', auth.isLoggedIn, function(req, res) {
		res.locals.pageTitle = "Mobile Home";
		res.locals.appName = "ng-app='mappXL-main'"
		res.locals.stdAssets = assetBuilder.getAssets("stdAssets", "m-general,m-angular,m-home");
		res.locals.appAssets = assetBuilder.getAssets("appAssets", "m-general,m-angular,m-home");
		res.render('mobile/home.ejs', {
            layout: activeLayout
		});
	});
}
