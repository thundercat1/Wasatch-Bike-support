var app = angular.module("app", ['ngRoute', 'ui.bootstrap']);


app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/homepage.html'
  })
  .when('/services', {
    templateUrl: 'templates/services.html'
  })
  .when('/about', {
    templateUrl: 'templates/about.html'
  })
  .when('/contact', {
    templateUrl: 'templates/contact.html'
  })
  .otherwise({
    redirectTo: '/'
  })
}]);


app.controller('appCtrl', function($scope, $location){
	$scope.isActive = function(route) {
        return route === $location.path();
    }
	
})