'use strict';
var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, quoteService) {
	//$scope.test = 'testing 1, 2, 3';
	$scope.getQuote = function() {
		$scope.quotes = quoteService.getQuote();
	};

	$scope.showQuote = quoteService.getQuote();  //this is injecting the service
	$scope.plusQuote = quoteService.addQuote();
	$scope.minusQuote = quoteService.removeQuote();
});