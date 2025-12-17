sap.ui.define([
  './BaseController.controller',
  'sap/m/MessageToast',
  'sap/ui/core/ValueState',
  'sap/ui/model/Filter',
  'sap/ui/model/FilterOperator',
  'sap/ui/model/Sorter'
], function(Controller,
	MessageToast,
	ValueState,
	Filter,
	FilterOperator,
	Sorter) {
  'use strict';
  
  return Controller.extend("ui5.demo.apps.controller.LandingPage",{
    onInit: function(){
     
     
    },
    onShowMessageButtonPress : function(evt){
      var message = this.getView().getModel().getProperty("/message");
      MessageToast.show(message);
    },

    formatScoreState:function(istate){
      if(istate){
        if(istate>80)
          return ValueState.Success;
        else if(istate>60)
          return ValueState.Warning;
        else
          return ValueState.Error
      }
    },

    formatName:function(fname,lname){
        var i18nText = this.getResourceBundle(),
        sReturnValue = i18nText.getText("combine_names",[fname,lname]);
        return sReturnValue;
    },

		searchEmployee: function(oEvt) {
        var sQuery = oEvt.getParameter("query"),
          aFilter = [new Filter("firstName",FilterOperator.Contains,sQuery),new Filter("lastName",FilterOperator.Contains,sQuery)],
          oTable = this.byId("employeeTable"),
          oBinding = oTable.getBinding("items"),
          oFilter = null;
          if(sQuery.length!=0){
            oFilter = new Filter({
              filters: aFilter,
              and : false
            });
          }      
          oBinding.filter(oFilter);
		},
    openSettings : function(){
      if(!this.employeeSettings){
        this.employeeSettings = this.loadFragment({
          name : "ui5.demo.apps.fragment.EmployeeSettings"
        });
      }
      this.employeeSettings.then(function(oDialog){
        oDialog.open();
      });
    },

     applySettings : function(oEvt){
        var sortItem = oEvt.getParameter("sortItem"),
            groupItem = oEvt.getParameter("groupItem"),
            sortDesc = oEvt.getParameter("sortDescending"),
            groupDesc = oEvt.getParameter("groupDescending"),
            oTable = this.byId("employeeTable"),
            oBinding = oTable.getBinding("items"),
            oSorter = null;
        if(sortItem) {
          oSorter = new Sorter(sortItem.getKey(),sortDesc);
        }

        if(groupItem){
          oSorter = new Sorter(groupItem.getKey(),groupDesc,true);
        }
        oBinding.sort(oSorter);
    }
  });
});