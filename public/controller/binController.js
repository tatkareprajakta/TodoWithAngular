App.controller('binController', ['$scope', '$controller', function($scope, $controller){
  $controller('welcomeController', {$scope: $scope})
  //inside scope you the controllerOne scope will available
  $scope.bin_view=false;
  $scope.keep="Bin";
  console.log($scope.input_div);
  $scope.archive_style={
    "background-color":"grey"

  }
  $scope.drop={
    "background-color":"grey"
  }
  $scope.search_archive={
    "background-color":"white"
  }
}]);
