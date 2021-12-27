'use strict';
/*global app*/
/*global localStorage*/
// Used in AuthController.js
app.factory('GeoBeanFactory', ['$http', function ($http) {
    return {
        FetchWeb3: FetchWeb3,
        FetchCoord: FetchCoord,
        FetchGeoBeanJSON: FetchGeoBeanJSON,
    }
    function FetchWeb3 () {
      return "https://polygon-mainnet.infura.io/v3/3b8cd805fe4e409587dce8014566ffb0";
    }
    /* Returns geo data from a google api on backend */
    function FetchCoord() {
      return $http.get('/geoBean').then((res)=>{return res});
    }
    function FetchGeoBeanJSON() {
      return $http.get('../../abis/GeoBean.json').then((res)=>{return res});
    }
    // TODO: Check coordinate against the library of GeoBeans on the blockchain

}]);
