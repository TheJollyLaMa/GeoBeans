var app = angular.module("ClientWebApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {controller: "QnBController", templateUrl: "StoreFront/store_front.html"})
    .when("/StoreFront", {controller: "QnBController", templateUrl: "StoreFront/store_front.html"})
    .when("/QnB/Quests", {controller: "QnBController",templateUrl: "QnB/quests.html"})
    .when("/QnB/Bounties", {controller: "QnBController",templateUrl: "QnB/bounties.html"})


    .when("/GeoBean", {controller: "GeoBeanController",templateUrl: "GeoBean/geobean.html"})
    .when("/BehindTheCounter/ManifestGeoBeans", {controller: "BehindTheCounterController",templateUrl: "BehindTheCounter/manifest_geo_beans.html"})

    .otherwise({redirectTo: "/"})
  }
]);
app.directive('modal', function () {
    return {
      template: '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">{{ title }}</h4>' +
              '</div>' +
              '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });


/*

- quests are meant to reward members for their interest in educating themselves on DAO activity
    and so must be designed to capture their learning inspiration for reasonable amounts of time
    while offer a reward large enough to help them feel relaxed while learning.

- bounties are designed to utilize and expand the skillsets of community members to improve the codebase,
  documentation, community outreach, or other activities deemed necessary for organizational improvement.

- Navigate to either page, click on the bounty/quest, get a summary of the task and the reward
    - complete and submit your work or read and take a quiz on the wallet connect page
        TODO: make a submission mechanism -
              popup modal with details and link submission input
              submit a github link to your work for review
              connects to your wallet to send your address and make sure you are set up for payment, (and avoid spam)
              alert pops up on my dashboard that a link has been submitted for review

    - once/if verified as having met the requirements, Bean£s are dropped in your wallet
        TODO: Backend interface for accounting
              with alerts of bounties for review and quests passed

    - kudoClones (nfts) are minted as memorabilia of your journey exercises
        TODO: add a new interface to the Minterface to mint CafLaM kudos

    - Bean£s are spent at the store for coffee
        TODO: add the ability to spend Beanlb in the caflam StoreFront

    - Bean£s and nft's can also be sold or transferred on the open market! Please DO try to maximize your profit!
        TODO: add notice and links to open marketplaces

    - Completing quests and bounties whitelists you for a monthly lottery!
        TODO: Whitelist mechanism on payout
        TODO: Simple Lottery Contract

    - Quests are one time freebies - but look out for ultimate quests! where you can win long term supply
        for extraordinary journeys that assist the company
*/



/*

The Hitchhikers Creed:
you want less than 5 employees.  You can do it with 1.  2-3 is ideal.
you want 2 or more 'robots' working for you.
they should be managing/monitoring your energy, water, food, and climate.
With those basic needs being monitored for you by your team,
you can start focussing on how you are going to efficiently support that team
you have to learn to code or communicate with the coders that are out there in their languages (github,charts,basic programming lingo)
From there,
copy gitcoins dao model
bounty out whatever you need done next and ration out your rewards while incentivising education on the mission through quests
take feedback from the community in polls and votes
circulate a currency and memorabilia
reach out to help a friend put their mask on. or finally take it off cuz you can properly isolate.
*/
