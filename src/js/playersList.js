(function () {
    angular.module('winners')
        .component('playersList', {
            templateUrl: 'views/playersList.html',
            controller: function ($scope, players) {
                $scope.players = players;
            }
        })
})();