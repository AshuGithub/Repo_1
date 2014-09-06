var myapp = angular.module('AngularMaster', []);

myapp.controller('mycontroller', function($scope, $http){

	
	$scope.engineer =
	 [
		{
			name:'ashutosh',
			ps:'10606504',
			surname:'chaturvedi'
		},
		{
			name:'ajit',
			ps:'10606223',
			surname:'patil'
		},
	];
	
	$scope.myfun = function(){
		$scope.engineer.push({name:'pravin',ps:'106063232',surname:'kale'});
		
	}
	$scope.message = "this one is most basic";	
});



myapp.config(['$routeProvider',
	function($routeProvider){
	$routeProvider.when('/Home',{
		templateUrl:'template/second.html',
		controller:'secondControlloer'
	}).
	when('/PG',{
		templateUrl:'template/third.html',
		controller:'thirdControlloer'
	}).
	otherwise({
		redirectTo:'/Home'
	});	
}]);

myapp.controller('secondControlloer', function($scope){
	$http.get('https://www.google.com').success(function(){alert("hiiii");});
	$scope.message = "this is second screen";
});
myapp.controller('thirdControlloer', function($scope){
	$scope.message = "this is third screen";
});