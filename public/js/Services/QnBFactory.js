'use strict';
/*global app*/
/*global localStorage*/
// Used in AuthController.js
app.factory('QnBFactory', ['$http', '$location', function ($http, $location) {
    return {
        fetchQuests: fetchQuests,
        fetchBounties: fetchBounties
    }
    /* Returns a list of quest objects from a database */
    function fetchQuests() {
       var data = [
            {
              'name': 'Quest',
              'reward': '1 Bean£',
              'details': {
                'msg': "Pass a simple comprehension quiz about Fair Trade Cert for a free pound!",
                'link': "https://www.fairtradecertified.org/",
                'verType': 'quiz'
              }
            },
            {
              'name': 'Super Quest',
              'reward': '2 Bean£',
              'details': {
                'msg': "Pass a simple comprehension quiz about Cafe Femenino for a free pound!",
                'link': "https://www.cafefemenino.com/",
                'verType': 'quiz'
              }
            },
            {
              'name': 'Super Epic Quest 3',
              'reward': '3 Bean£',
              'details': {
                'msg': "Complete cryptozombie modules for free pounds!",
                'link': "https://cryptozombies.io/",
                'verType': 'screenshot'
              }
            },
            {
              'name': 'Super Epic Quest on Behalf of the Company',
              'reward': '3 Bean£ and 1 special edition company nft!',
              'details': {
                'msg': "Complete an Epic task for the company for free pounds and a company NFT!",
                'link': "https://githube.com/TheJollyLaMa/CaffeineLaManna.com",
                'verType': 'review'
            }
          }
        ];
        return data;
          // return $http.get('php/fetchquests.php').then((res)=>{return res});
    }
    /* Returns a list of bounty objects from a database */
    function fetchBounties() {
       var data = [
            {
              'name': 'Bounty',
              'reward': '1 Bean£',
              'details': {
                'msg': "Fix issues on github!",
                'link': "https://www.github.com/TheJollyLaMa/",
                'verType': 'issue'
              }
            },
            {
              'name': 'Super Bounty',
              'reward': '2 Bean£',
              'details': {
                'msg': "Work on one of my other projects!",
                'link': "https://www.github.com/TheJollyLaMa",
                'verType': 'review'
              }
            },
            {
              'name': 'Super Epic Bounty',
              'reward': '3 Bean£',
              'details': {
                'msg': "Advertising and Marketing on behalf of the community!",
                'link': "https://www.caffeinelamanna.com/#!/Marketing_Requests",
                'verType': 'review'
              }
            },
            {
              'name': 'Super Epic Bounty on Behalf of the Company and everything holy!',
              'reward': '3 Bean£ and 1 special edition company nft!',
              'details': {
                'msg': "Complete an Epic task for the community for free pounds and a company NFT!",
                'link': "https://caffeinelamanna.com/#!/Epic_Tasks",
                'verType': 'review'
              }
            }
          ];
          return data;
          // return $http.get('php/fetchquests.php').then((res)=>{return res});
    }

}]);
