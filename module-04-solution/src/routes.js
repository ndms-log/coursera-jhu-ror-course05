(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.ui.template.html'
  })

  .state('categories', {
	url: '/categories',
	templateUrl: 'src/menuapp/templates/categories.ui.template.html',
	controller: 'CategoryListController as categoryList',
	resolve: {
		items: ['MenuDataService', function (MenuDataService) {
			return MenuDataService.getAllCategories();
		}]
	}
  })
  
  .state('items', {
	url: '/items/{itemId}',
	templateUrl: 'src/menuapp/templates/items.ui.template.html',
	controller: 'CategoryItemsController as categoryItems',
	resolve: {
		items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
			return MenuDataService.getItemsForCategory($stateParams.itemId);
		}]
	}
  })
}

})();
