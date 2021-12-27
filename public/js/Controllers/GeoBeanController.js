"use strict";
app.controller("GeoBeanController", ["$scope", "GeoBeanFactory", function($scope, GeoBeanFactory) {
  var init = function () {
      $scope.title = 'GeoBean HomePage';
      $scope.fetchGeoData = async () => {
        await GeoBeanFactory.FetchCoord().then((res)=>{
          console.log(res);
          $scope.geoData = res.data;
        })
      };
    
      $scope.fetchGeoData();
  }

  init();
}]);
