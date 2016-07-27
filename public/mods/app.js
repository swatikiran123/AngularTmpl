'use strict';

angular.module('appXL-admin', ['users','confirmDialogDirective','tooltips','userprofileDirective','userDirective','userdisplayDirective'
	,'datePicker','richTextDirective','dropzone','fileuploadDirective','userAutoDirective','angucomplete-alt']);

angular.module('appXL-profile',
	['userprofileDirective','userDirective','userdisplayDirective','datePicker','dropzone','fileuploadDirective',
	'profile']);
