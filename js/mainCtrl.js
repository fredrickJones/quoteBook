'use strict';
var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
	//$scope.test = 'testing 1, 2, 3';
	$scope.getData = function() {
		$scope.quotes = dataService.getQuote();
	};
	$scope.addData = function() {
		$scope.quotes = dataService.addQuote();
	};
	$scope.removeData = function() {
		$scope.quotes = dataService.removeQuote();
	};

	$scope.getQuote = dataService.getData();
	$scope.addQuote = dataService.addData();
	$scope.removeQuote = dataService.removeData();
});