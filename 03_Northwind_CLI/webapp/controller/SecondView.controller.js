sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller,
	MessageToast,
	Fragment,) {
	"use strict";

	return Controller.extend("ui5.demo.apps.controller.SecondView", {

		onShowMessageButtonPress: function (evt) {
			MessageToast.show("test msg")
		},

		onOpenDialogButtonPress: function (evt) {
			if (!this.oDiaolg) {
				this.oDiaolg = this.loadFragment({
					name: "ui5.demo.apps.fragment.dialog"
				});
			}
			this.oDiaolg.then(function (oDiaolg) {
					oDiaolg.open();
				});
		},

		onCloseButtonPress: function (oEvent) {
			this.oDiaolg.then(function (oDiaolg) {
				oDiaolg.close();
			});
		}


	});
});