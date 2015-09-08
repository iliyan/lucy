describe('HomeCtrl', function() {

	beforeEach(module('lucy'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl', {$scope: scope});
    }));

	it('should be available', inject(function() {

		expect(ctrl).toBeDefined();
		expect(ctrl.factories).toBeDefined();

	}));

});
