sap.ui.define([
  'sap/ui/core/ComponentContainer'
], function(ComponentContainer) {
  'use strict';
  
  new ComponentContainer({
    name : "ui5.demo.apps",
    settings : {
      id : "demo"
    },
    async : true
  }).placeAt("content");
});