var app = angular.module('protofolioApp', ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/loading.html"
  })
  .otherwise({
    templateUrl : "templates/loading.html"
  });
});
app.controller('homeCtrl', function($scope) {

});
