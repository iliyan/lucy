angular
    .module('d3', [])
    .provider('d3', [
        function () {

            var $window = window || {};
            this.original = this.original || $window.d3;
            delete $window.d3;

            this.$get = function() {
                return this.original;
            }

        }])
    .run(['d3', function (d3) {
        //delete window.d3;
    }]);
