'use strict';
var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
	//$scope.test = 'testing 1, 2, 3';
	$scope.getQuote = function() {
		$scope.quotes = dataService.getQuote();
	};
	$scope.addQuote = function() {
		$scope.quotes = dataService.addQuote();
	};
	$scope.removeQuote = function() {
		$scope.quotes = dataService.removeQuote();
	};

	$scope.grabQuote = dataService.getQuote();
	$scope.plusQuote = dataService.addQuote();
	$scope.minusQuote = dataService.removeQuote();
});