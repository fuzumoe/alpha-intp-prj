var app = angular.module('cms', []);


app.controller('login', function ($scope, $http) {
    $scope.showSignUp = function () {
        console.log("working fine :: showSignUp");
        $("#login").css("display", "none");
        $("#sighn-up").css("display", "block");
    };
//    $scope.clear = function () {
//       console.log("working fine :: clear " +$("#login.username").val());
//        $("#login.password").text("");
////
////        login.username = null;
//    };


});

app.controller('register', function ($scope, $http) {
    $scope.goBackLogin = function () {
        console.log("working fine :: goBackLogin");
        $("#sighn-up").css("display", "none");
        $("#login").css("display", "block");

    };
    $scope.clear = function () {

    };
    
});



