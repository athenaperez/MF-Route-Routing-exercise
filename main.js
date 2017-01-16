console.log("well hello beautiful! make this a good day!")


//An Angular application module. Inject ngRoute into your applcation==>
var app = angular.module('routeRouting', ['ngRoute'])

//A config section for your application where you set up two routes.
//Famous highway #1
//Famous highway #2
app.config(function($routeProvider){
	$routeProvider
 	.when('/pch', {
 		controller: 'FirstCtrl',
 		templateUrl: 'partials/PCH1.html'
 	})
 	.when('/crg', {
 		controller: 'SecondCtrl',
 		templateUrl: 'partials/riverGorgeHWY.html'
 	})
})

//Two controllers defined in your application
app.controller('FirstCtrl', function($scope){
	$scope.highwayName = "Pacific Coast Highway"
	$scope.highwayDescription = "Scenic coastal highway."
})

//Two controllers defined in your application
app.controller('SecondCtrl', function($scope){
	$scope.highwayName = "Columbia River Gorge Highway"
	$scope.highwayDescription = "Beautiful scenery, Multnomah Falls, etc."
})


//Two controllers defined in your application.











