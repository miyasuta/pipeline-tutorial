/*global QUnit*/

sap.ui.define([
	"sap/cp/webapp/controller/View1.controller"
], function (Controller) {
    "use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
    });

    var oController = new Controller();
    
    QUnit.module("Price State");
    function priceStateTestCase(oOptions) {
        // Act 
        var sState = oController.priceState(oOptions.price);

        // Assert
        oOptions.assert.strictEqual(sState, oOptions.expected, "The price state was correct");
    }

    QUnit.test("Should format the products with a price lower than 50 to Success", function (assert) {
        priceStateTestCase.call(this, {
            assert: assert,
            price: 42,
            expected: "Success"
        });
    });    

    QUnit.test("Should format the products with a price of 50 to None", function (assert) {
        priceStateTestCase.call(this, {
            assert: assert,
            price: 50,
            expected: "None"
        });
    });

    QUnit.test("Should format the products with a price between 50 and 250 to None", function (assert) {
        priceStateTestCase.call(this, {
            assert: assert,
            price: 112,
            expected: "None"
        });
    });

    QUnit.test("Should format the products with a price between 250 and 2000 to Warning", function (assert) {
        priceStateTestCase.call(this, {
            assert: assert,
            price: 798,
            expected: "Warning"
        });
    });    

    QUnit.test("Should format the products with a price higher than 2000 to Error", function (assert) {
        priceStateTestCase.call(this, {
            assert: assert,
            price: 2001,
            expected: "Error"
        });
    });    

});
