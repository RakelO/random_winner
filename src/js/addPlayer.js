(function () {
    'use strict';
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