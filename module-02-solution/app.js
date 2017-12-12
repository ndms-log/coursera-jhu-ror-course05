(function () {
'use strict';

angular
	.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
	
function ToBuyController (ShoppingListCheckOffService) {
	var shoppingListItems = this;
	
	shoppingListItems.items = ShoppingListCheckOffService.getShoppingListItems();
	
	shoppingListItems.itemBought = function (itemIndex) {
		ShoppingListCheckOffService.checkOff(itemIndex);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController (ShoppingListCheckOffService) {
	var boughtItems = this;
	
	boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
	var service = this;
	
	var listItems = [
		{name: "cookies", quantity: 10 },
		{name: "bananas", quantity: 4 },
		{name: "apples", quantity: 8 },
		{name: "pies", quantity: 5},
		{name: "cucumbers", quantity: 2 }
	];
	var boughtItems = [];
	
	service.checkOff = function (itemIndex) {
		var item = listItems[itemIndex];
		listItems.splice(itemIndex, 1);
		boughtItems.push(item);
	};
	
	service.getShoppingListItems = function () {
		return listItems;
	};
	
	service.getBoughtItems = function () {
		return boughtItems;
	};
}
	
})();