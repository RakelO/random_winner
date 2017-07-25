angular.module('winners', ['ngMessages'])
.value('players', [
        {
          "firstName": "Igor",
          "lastName": "Sergiienko",
          "date": null
        },
        {
          "firstName": "Igor",
          "lastName": "Sergiienko",
          "date": null
        }
      ]);
(function () {
    angular.module('winners')
        .component('addPlayer', {
            templateUrl: 'views/addPlayer.html',
            controller: function ($scope, players) {
                $scope.player = {};
                $scope.savePlayer = function () {
                    players.push($scope.player);
                    $scope.player = {};
                }
            }
        })
})();
(function () {
    angular.module('winners')
        .component('playersList', {
            templateUrl: 'views/playersList.html',
            controller: function ($scope, players) {
                $scope.players = players;
            }
        })
})();
(function(){
    angular.module('winners')
    .component('chooseWinner', {
        templateUrl: 'views/winner.html',
        controller: function($scope, players){
            $scope.players = players;
            $scope.chooseWinner = function(){
                $scope.winner  = $scope.players[Math.floor(Math.random()*$scope.players.length)];
            }
        }
    })
})();