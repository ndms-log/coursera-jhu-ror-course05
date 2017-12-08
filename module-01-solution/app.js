(function () {
'use strict';

angular
	.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
	
function LunchCheckController ($scope) {
	
	$scope.lunchList = "";
	
	$scope.checkIfTooMuch = function () {
		
		var lunchItems = $scope.lunchList.split(',');
		
		if ($scope.lunchList === "") {
			$scope.message = "Please enter data first";
		} else {
			if (lunchItems.length < 4) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			} 		
		}
	};
}
	
})();