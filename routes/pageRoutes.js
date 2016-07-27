var constants       = require('../scripts/constants');
var logger          = require(constants.paths.scripts + '/logger');
var util          = require(constants.paths.scripts + '/util');
var assetBuilder      = require(constants.paths.scripts + '/assetBuilder');
var auth          = require('./auth.js');

module.exports = function(app)
{
    // route to admin module
    app.get('/admin/', auth.isLoggedIn, function(req, res) {
    res.locals.pageTitle = "Site Administration";
    res.locals.appName = "ng-app='appXL-admin'"
    res.locals.stdAssets = assetBuilder.getAssets("stdAssets", "general,angular,admin");
    res.locals.appAssets = assetBuilder.getAssets("appAssets", "general,angular,admin");
        res.render('admin/home.ejs', {});
    });

    // route to profile module
  app.get('/profile/', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "User Profile";
    res.locals.appName = "ng-app='appXL-profile'"
    res.locals.stdAssets = assetBuilder.getAssets("stdAssets", "general,angular,profile");
    res.locals.appAssets = assetBuilder.getAssets("appAssets", "general,angular,profile");
        res.render('admin/home.ejs', {});
    });
}
