angular.module('lucy').controller('HomeCtrl', function($scope){


    this.factories = [
        {x:50, y:50}
    ];

    this.onDragEndCallback = function(x, y) {
        this.factories.push({x:x, y:y});
    }
});
