(function () {

'use strict';

angular.module('common')
.service('UserService', UserService);

function UserService () {
  var service = this;
  
  var user = {
    profile: null,
    registered: false
  };
  
  service.getUser = function () {
    return user;
  };
  
  service.register = function (userData) {
    user.profile = userData;
    user.registered = true;
  };
}

})();