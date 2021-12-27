'use strict';
/*global app*/
app.controller('BehindTheCounterController', ['$scope', 'GeoBeanFactory', function($scope, GeoBeanFactory){
  var init = function() {
      $scope.title = 'Behind The Counter';

      $scope.ids = {};$scope.GeoBeans = [];$scope.token_ids_owned = [];$scope.mintDataArray = [];
      $scope.new_geo_bean = {geo_promo_name:"Central Park Bean£"};
      $scope.loadTheBlock = async function () {
        const web3_rpc = await GeoBeanFactory.FetchWeb3();
        console.log(web3_rpc);
        const provider = await new Web3.providers.HttpProvider(web3_rpc);
        console.log(provider);
        try {
           // Request account access if needed
           alert("🦊 Bean£ needs permission to connect to metamask 🦊")
           // await ethereum.enable();
           $scope.account = await ethereum.enable().then(res => {return res[0];});
           // Acccounts now exposed
           // web3.eth.sendTransaction({/* ... */});
        } catch (error) {
           alert("🦊 Metamask did not connect. Bean£ needs permission to connect to metamask 🦊")
        }
        $scope.web3 = new Web3(provider);
        $scope.blockNum = await $scope.web3.eth.getBlockNumber();
        console.log("Sanity Check");
        console.log("Polygon Block Number:",$scope.blockNum);
        console.log("Connected Account: ",$scope.account);

        $scope.display_account_first = $scope.account.toString().substring(0,4);
        $scope.display_account_last = $scope.account.toString().substring($scope.account.toString().length - 4);

        // $scope.GB_json = await GeoBeanFactory.FetchGeoBeanJSON();
        //
        // $scope.GB_Contract = await $scope.web3.eth.net.getId().then(function(net_id){
        //    console.log(net_id);
        //    if($scope.GB_json.networks[net_id]) {
        //      $scope.GB_ContractAddress = $scope.GB_json.networks[net_id].address;
        //      var c = new $scope.web3.eth.Contract($scope.GB_json.abi, $scope.GB_ContractAddress);
        //     return c;
        //   }else{return $window.alert("🚨 Smart contract not connected to selected network! 🚨")}
        // });

        // $scope.totalGeoBeans = await $scope.GB_Contract.methods.getGeoBeansLength().call().then((len) => {return len;});
        // $scope.GeoBeans = await $scope.fetchGeoBeans();
        $scope.$digest();
       }

       // $scope.fetchAlms = async function () {
       //   var alm = {};
       //   var AngelTokens = [];
       //   console.log("Total Angel Tokens Created: " + $scope.totalAlms);
       //   for (var i = 1; i <= $scope.totalAlms; i++) {
       //     // load alms
       //     await $scope.AT_XContract.methods.alms(i-1).call().then(async (alm) => {
       //       await $scope.AT_XContract.methods.map_id_to_Alm(alm.id).call().then(async (alm) => {
       //       console.log(alm.owner);
       //         var uri_str = await web3.eth.abi.decodeParameters(['string', 'uint256', 'string'], alm.uri);
       //         alm.uri = uri_str[0] + uri_str[1] + uri_str[2];
       //         console.log(alm.uri);
       //         // console.log(alm.mint_data);
       //         var mint_str = await web3.eth.abi.decodeParameters(['uint256', 'string', 'uint256', 'uint256', 'uint256', 'string'], alm.mint_data);
       //         console.log(mint_str);
       //         alm.num_issued = mint_str[0];
       //         alm.mint_date = mint_str[1];
       //         alm.cost = mint_str[2];
       //         alm.angel_coefficient = mint_str[3];
       //         alm.status = mint_str[4];
       //         alm.product = mint_str[5];
       //         console.log(alm.id);
       //         console.log($scope.account);
       //         alm.bal = await $scope.AT_XContract.methods.balanceOf($scope.account,alm.id).call();
       //         console.log(alm.bal);
       //         if(alm.status == 1) {alm.status = "waiting...";
       //         }else if(alm.status == 2) {alm.status = "executed...";
       //         }else if(alm.status == 3) {alm.status = "shipped...";
       //         }else if(alm.status == 4) {alm.status = "fulfilled...";
       //         }else{alm.status = "no status";}
       //         AngelTokens[i-1] = alm;
       //       });
       //     });
       //   };
       //   return AngelTokens;
       // }

      $scope.manifest_geo_beans = function (new_geo_bean) {
         var today = new Date();
         today = String(today.getDate()).padStart(2, '0') + String(today.getMonth() + 1).padStart(2, '0') + today.getFullYear();
         //need an error catch for instance when contract rejects a previously minted ID
         // as in : ID is not Unique! Use a slightly different name! (add a number to it if your endeavor mints frequently)
         console.log($scope.account);
         $scope.GB_Contract.methods
         .tokenGenesis(new_geo_bean)
         .send({ from: $scope.account })
         .once('receipt', async function(receipt) {
           var ManifestEvent = receipt.events.ManifestedGeoBean.returnValues;
           console.log(ManifestEvent);
           var escan_url = "https://polygonscan.com/tx/" . receipt.transactionHash;
           alert("You're transaction is being mined.  You can view it here: " + escan_url)
           $scope.$digest();
         });
       }

  }
  init();

}]);
