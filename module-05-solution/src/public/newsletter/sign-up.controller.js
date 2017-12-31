(function () {

'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'UserService', 'MenuService'];
function SignUpController ($http, UserService, MenuService) {
  var ctrl = this,
      user = {};
  
  ctrl.submit = function () {
    
    ctrl.completed = false;
    
    var promise = MenuService.getMenuItem(ctrl.user.menuNumberFavDish);
    
    promise
    .then(function () {
      ctrl.dishNotFound = false;
      UserService.register(ctrl.user);
      ctrl.completed = true;
    })
    .catch(function () {
      ctrl.dishNotFound = true;
    });
    

  };
  
}
})();