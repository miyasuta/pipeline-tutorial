	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/View1"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();
        });
        
		opaTest("Should able to press the button and see the result", function (Given, When, Then) {
            // Actions
            When.onTheAppPage.iPressTheButton();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheMessage();

			//Cleanup
			Then.iTeardownMyApp();
		});        
	});
