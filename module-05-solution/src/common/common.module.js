(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ndms-log-jhu-ep-coursera-c5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
