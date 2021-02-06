sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
                iPressTheButton: function () {
                    return this.waitFor({
                        id: "button0",
                        viewName: sViewName,
                        actions: new Press()
                    });                    
                }
            },

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
                },
                iShouldSeeTheMessage: function () {
					return this.waitFor({
                        // Turn off autoWait    
                        autoWait: false,                        
                        viewName: sViewName,
                        check: function () {
                            // Locate the message toast using its class name in a jQuery function    
                            return $(".sapMMessageToast").length > 0;
                        },
						success: function () {
							Opa5.assert.ok(true, "Message is displayed");
						},
						errorMessage: "Did not find the Message"
					});                    
                }
			}
		}
	});

});
