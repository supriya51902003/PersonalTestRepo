({
     doInit: function(component,event,helper) 
    {
        helper.getAllBoatTypes(component,event,helper);
        
        
      /*  console.log('inside do init '); 
        debugger;
       var action=component.get('c.getSearchOptions');
        action.setcallback(this,function(response)
         {
             debugger;
             var state = response.getState();
             if (state === "SUCCESS")
             {
                 debugger;
                 console.log('inside success state');
                 component.set('v.searchOptionToIdMap',response.getReturnValue());
                 var custs = [];
                 var conts = response.getReturnValue();
                 for(var key in conts)
                 {
                    console.log('populated list');
                    custs.push({value:conts[key], key:key});
                 }
                 component.set("v.searchOptions", custs);
             }
             
         }); */
    },
    handleChange : function(component,event,helper)
    {
		var boatTypeId = component.find("selectItem").get("v.value"); 
        component.set("v.selectedType", boatTypeId);
    },
    onFormSubmit : function(component,event,helper)
    {
        debugger
        var boatTypeId = component.find("selectItem").get("v.value"); 
        var formSubmit = component.getEvent("boatSearchEvent");
        formSubmit.setParams({"formData":
                            {"boatTypeId" : boatTypeId}
        });
        formSubmit.fire();
    }, 
     createBoat: function (component) 
     {
            var createRecordEvent = $A.get('e.force:createRecord');
            if (createRecordEvent) {
                //var typeName = component.find('typeSelect').get('v.value');
                var typeName = component.find('selectItem').get('v.value');
                debugger
                var typeMap = component.get('v.searchOptionToIdMap');
                var typeId = null;
                if (typeName && typeMap && typeMap[typeName]) {
                    typeId = typeMap[typeName];
                }
                createRecordEvent.setParams({
                    'entityApiName': 'Boat__c',
                    'defaultFieldValues': {
                    'BoatType__c': typeId
                    }
                });
                createRecordEvent.fire();
            }
       }
})