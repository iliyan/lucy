/**
 * Created by iliyan on 9/2/15.
 */
describe("d3", function () {

    beforeEach(module('d3'));
    it("should be available", inject(function (d3) {
        expect(d3).toBeDefined();
    }));

});
