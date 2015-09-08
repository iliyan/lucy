describe('draggable', function() {

  beforeEach(module('d3'));

  var scope,compile;

  beforeEach(inject(function($rootScope,$compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  iit('should be available', inject(function($rootScope) {

      var element = compile(angular.element('<circle draggable></circle>'))(scope);
      expect(element.length).toBe(1);
      expect(element.attr('transform')).toBeUndefined();

  }));
});
