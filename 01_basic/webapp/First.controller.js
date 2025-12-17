sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
  'use strict';
  return Controller.extend("app.First", {
    go_to_next_screen: function () {
      MessageToast.show("Congrats!! You are being navigated to second screen");
      this.byId("app").to(this.byId("intro"));
    },
    onInit : function(){
    
      var data = new JSONModel({
          features: [
						"Enterprise-Ready Web Toolkit",
						"Powerful Development Concepts",
						"Feature-Rich UI Controls",
						"Consistent User Experience",
						"Free and Open Source",
						"Responsive Across Browsers and Devices"
					]
        });
        this.getView().setModel(data);
    },
    onChange : function(oEvt){
        var bState = oEvt.getParameter("state");
        this.byId("ready").setVisible(bState);
    }
  });
});