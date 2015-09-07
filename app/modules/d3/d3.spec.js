/**
 * Created by iliyan on 9/2/15.
 */
describe("d3", function () {

    beforeEach(module('d3'));
    it("should be unavailable globally", inject(function ($window, d3) {
        expect(d3).toBeDefined();
        expect($window.d3).toBeUndefined();
        expect(window.d3).toBeUndefined();
    }));

});
