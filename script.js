var madlibApp = angular.module("madlibApp", []);

madlibApp.controller("wordCtrl", function($scope) {
    $scope.Gender = "";
    $scope.Name = "";
    $scope.DirtyTask = "";
    $scope.ObnoxiousCelebrity = "";
    $scope.JobTitle = "";
    $scope.Celebrity = "";
    $scope.HugeNumber = "";
    $scope.TediousTask = "";
    $scope.UselessSkill = "";
    $scope.Adjective = "";

	$scope.male = function() {
		$scope.heShe = "he";
		$scope.himHer = "him";
		$scope.hisHer = "his";
	};

	$scope.female = function() {
		$scope.heShe = "she";
		$scope.himHer = "her";
		$scope.hisHer = "her";
	};

});