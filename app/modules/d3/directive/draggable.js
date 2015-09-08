'use strict';

/**
 * @ngdoc directive
 * @name knobs.directive:draggable
 * @description
 * # draggable
 */

angular.module('d3')
    .directive('draggable', ['$document', 'd3', function ($document, d3) {
        return {
            scope: {
                onDragEnd: '&'
            },
            link: function (scope, element, attr) {

                var drag = d3.behavior
                    .drag()
                    .on("dragstart", function dragstart(d) {
                        d.transform = d3.select(this).attr("transform").slice(7, -1).split(' ').map(parseFloat);
                        d.transform0 = angular.copy(d.transform);
                    })
                    .on("drag", function dragmove(d) {
                        d.transform[4] = d3.event.x;
                        d.transform[5] = d3.event.y;
                        d3.select(this).attr("transform", "matrix(" + d.transform.join(' ') + ")");
                        d3.select(this).classed("draggable-active", true);
                    })
                    .on("dragend", function dragend(d) {
                        d3.select(this).attr("transform", "matrix(" + d.transform0.join(' ') + ")");
                        d3.select(this).classed("draggable-active", false);
                        scope.$applyAsync(function() {
                            scope.onDragEnd({x: d.transform[4], y: d.transform[5]});
                        });
                    });

                d3.select(element[0])
                    .datum([{}])
                    .call(drag);
            }
        };
    }]);
