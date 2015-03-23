var controllersModule = angular.module("exampleApp.controllers", [])

controllersModule.controller("dayCtrl", function ($scope, days)) {
	$scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days)) {
	$scope.day = days.tomorrow;
});