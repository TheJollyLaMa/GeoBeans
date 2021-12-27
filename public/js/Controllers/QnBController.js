"use strict";
app.controller("QnBController", ["$scope", "QnBFactory", function($scope, QnBFactory) {
  var init = function () {
      $scope.title = { quests: 'Quests HomePage', bounties: 'Bounties HomePage'};
      $scope.quests = QnBFactory.fetchQuests();//.then((quests)=>{return quests.data;});
      $scope.bounties = QnBFactory.fetchBounties();//.then((quests)=>{return quests.data;});
      $scope.showModal = false;
      $scope.open = function () {
        $scope.showModal = !$scope.showModal;
        $scope.msg = "Clicked";
      }

  }

  init();
}]);
