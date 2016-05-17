var app = angular.module('cms', []);


app.controller('login', function ($scope, $http) {
     $scope.isFaceBookUser = false;
     $scope.isGooglePlusUser = false;
     $scope.isTwitterUser = false;
    
    /**
     * 
     * @param {type} auth
     * @returns {undefined}
     */
    function authenticate(auth) {
        if (auth == true) {
            //do something
        }
        if (auth == false) {
            //do somthing
        }
    }
    /**
     * this method will show sign up form
     * @returns {undefined}
     */
    $scope.showSignUp = function () {
        console.log("working fine :: showSignUp");
        $("#login").css("display", "none");
        $("#sighn-up").css("display", "block");
    };
    /***
     *  this method will do facebook sighn up
     * @returns {undefined}
     */
    $scope.facebokLogin = function () {
        //do method here
    };
    /**
     *  this method will do twitter sighn up
     * @returns {undefined}
     */
    $scope.twitterLogin = function () {
        // do method here
    };
    /**
     *  this method will do googleplus sign up
     * @returns {undefined}
     */
    $scope.googlePlusLogin = function () {
        //do mehtod here
               
        //finaly
   
    };


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



