(function(){
    'use strict';
    angular.module('winners')
    .component('chooseWinner', {
        templateUrl: 'views/winner.html',
        controller: function($scope, players){
            $scope.players = players;
            $scope.chooseWinner = function(){
                function getRandomItem(arr){
                    return arr[Math.floor(Math.random()*arr.length)];
                }
                $scope.winner  = getRandomItem($scope.players);
            }
        }
    })
})();