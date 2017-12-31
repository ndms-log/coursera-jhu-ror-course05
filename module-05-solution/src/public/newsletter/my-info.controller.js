(function () {

'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'user'];
function MyInfoController (MenuService, user) {
  var ctrl = this;
  ctrl.userProfile = user.profile;
  ctrl.userIsRegistered = user.registered;
  
  ctrl.$onInit = function () {
    if (user.registered) {
      console.log(user.profile.menuNumberFavDish);
      var promise = MenuService.getMenuItem(user.profile.menuNumberFavDish);
      
      promise.then(function (response) {
        console.log(response);
        ctrl.favDish = response;
      });
    }
  };
}

})();