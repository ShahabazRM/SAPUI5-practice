sap.ui.define([
    "sap/ui/core/UIComponent",
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode'
], function (UIComponent, JSONModel, BindingMode) {
    'use strict';

    return UIComponent.extend("ui5.demo.apps.Component", {

        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "manifest": "json"


        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            var i18n = this.getModel("i18n");
            var oBundle = i18n.getResourceBundle(),
                mData = new JSONModel({
                    message: oBundle.getText("msg")
                });
            mData.setDefaultBindingMode(BindingMode.TwoWay);
            this.setModel(mData);
        }

    });

});