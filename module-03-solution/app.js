(function () {
'use strict';

angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective)
	.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var ctrl = this;
		
	ctrl.found = [];
	ctrl.searchTerm = "";
	ctrl.status = {};
	
	ctrl.search = function () {
		if (ctrl.searchTerm !== "") {
			var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
			promise.then(function (result) {
				if (result.length != 0) {
					ctrl.found = result;
					ctrl.status.notFound = false;
				} else {
					ctrl.found = [];
					ctrl.status.notFound = true;
				}
			});
		} else {
			ctrl.found = [];
			ctrl.status.notFound = true;
		}
	};
	
	ctrl.removeItem = function (index) {
		ctrl.found.splice(index, 1);
	};
}
	
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
	var service = this;
	
	service.getMatchedMenuItems = function (searchTerm) {
		return $http({
		  method: "GET",
		  url: (ApiBasePath + "/menu_items.json")
		}).then(function (response) {
			var foundItems = response.data.menu_items.filter(function (item) {
				return (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1);
			});
			return foundItems;
		});
	};
}

function FoundItemsDirective () {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
		  foundItems: '<items',
		  onRemove: '&'
		}
	};

	return ddo;
}


})();