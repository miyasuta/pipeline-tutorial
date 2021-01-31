sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.cp.webapp.controller.View1", {
			onInit: function () {

            },
            
            priceState: function (iPrice) {
                if (iPrice < 50) {
                    return "Success";
                }
                else if (iPrice >= 50 && iPrice < 250) {
                    return "None";
                }
                else if (iPrice >= 250 && iPrice < 2000) {
                    return "Warning";
                }
                // else {
                //     return "Error";
                // }
            }
		});
	});
