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