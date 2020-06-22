var app = angular.module('protofolioApp', ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/home.html"
  })
  .when("/about", {
    templateUrl : "templates/about.html"
  })
  .otherwise({
    templateUrl : "templates/loading.html"
  });
});
app.controller('homeCtrl', function($scope) {
    $scope.roles = ["An SSE at Oracle","a Java professional" , "an Angular Developer","Full Stack Developer","an AWS Practitioner","a Mentor"]
    $scope.currRole = "";
    $scope.duration = 100;
    $scope.currIndex = 0;
    $scope.displayRole = "";
    $scope.showText = function() {
        if($scope.currRole == "") {
          $scope.currRole = $scope.roles[0];
          $scope.displayText();
        } else {
          let index = $scope.roles.findIndex(i => i == $scope.currRole);
          index++;
          index = index < $scope.roles.length ? index : 0;
          $scope.currRole = $scope.roles[index];
          $scope.displayText();
        }
    }
    $scope.activeTab = function(ref) {
       $("#navbar").find("li").removeClass('active');
       $("#navbar").find("a").removeClass('active');
       $("#navbar").find("."+ref).addClass('active');
       $("#navbar").find("."+ref).find("a").addClass('active');
       $(".navbar-collapse").collapse('hide')
    }
    $scope.displayText = function() {
      if($scope.currIndex <= $scope.currRole.length) {
        $scope.displayRole = $scope.currRole.substr(0,$scope.currIndex);
        $scope.currIndex++;
        if($("#typer").length>0) {
          $("#typer")[0].innerText = $scope.displayRole;
        }
        setTimeout($scope.displayText, 100);
      } else {
        $scope.clearText();
      }
    }

    $scope.clearText = function() {
      if($scope.currIndex > -1) {
        $scope.currIndex--;
        $scope.displayRole = $scope.currRole.substr(0,$scope.currIndex);
        if($("#typer").length>0) {
          $("#typer")[0].innerText = $scope.displayRole;
        }
        setTimeout($scope.clearText, 100);
      } else {
        $scope.showText();
      }
    }
    $scope.showText();
    $scope.showFooter = ()=> {
      $(".footer").show();
    }
    $scope.activateAbout = ()=> {
      $(".footer").hide();
      $scope.activeTab('abouttab');
    }
    $scope.scrollToTech = ()=>{
      $("#techSctn")[0].scrollIntoView();
    }
});