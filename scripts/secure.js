var constants       = require('../scripts/constants');
var util						= require(constants.paths.scripts + "/util");
var logger					= require(constants.paths.scripts + "/logger");

var secure = {};

secure.isInAnyGroups = isInAnyGroups;
secure.getGroups = getGroups;

module.exports = secure;

var groups = {										// constants defining the application paths
    'admin'										: 'A20484567892345678900001'
};

function isInAnyGroups(user, grps){

	var check = false;

	grps.split(",").forEach(function(grp){

		grp = grp.trim();

		if (grp.toLowerCase() == "user"){
			check = true;
		}

		if(groups[grp] !== undefined){
			user.memberOf.forEach(function(member){
				member = ""+ member;

				if(member.compare(groups[grp])){
					check = true;
				}
			});
		}
	});

	return check;
}

function getGroups(user){
	if(user.memberOf === "")
		return "user";

	var grps = [];
		grps.push("Admin");

	return grps.join(',');
}
