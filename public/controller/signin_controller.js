App.controller('signin_controller', function($scope,$location, signin_service) {
    console.log("gfghjfghfjgh");

    $scope.sign_in = function() {
        var email_id = $scope.uname;
        var password = $scope.pass;
        console.log(email_id);
        console.log(password);
        var object = {
            email: email_id,
            password: password

        }

        var obj = signin_service.App(object);
        obj.then(function(data) {
          console.log(data.data.status,"sign_in");
          if(data.data.status==true)
          {
            $location.path('/welcome');
          }
          else{
            console.log("ghfhjhj");
              $location.path('/signin');
          }

        }).catch(function(error) {
              $location.path('/signin');
        })
    }


});


App.service('signin_service', function($http) {
    this.App = function(object) {
        return $http({
            url: "/sign_in",
            method: "POST",
            data: object
        });
    }
});