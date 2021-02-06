sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageToast) {
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
                else {
                    return "Error";
                }
            },

            onPress: function () {
                MessageToast.show("Hello!");
            }
		});
	});
