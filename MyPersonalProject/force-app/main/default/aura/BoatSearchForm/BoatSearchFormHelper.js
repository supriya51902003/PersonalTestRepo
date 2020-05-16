({
    getAllBoatTypes : function(component,event,helper)
    {
        
        var action = component.get("c.getBoatTypes");
        action.setCallback(this,function(response){
            var state = response.getState();
            debugger;
            if (state === "SUCCESS"){
                debugger
                component.set("v.BoatTypes", response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        //send action off to be executed
        $A.enqueueAction(action);
    },
    renderNewButton: function (component) {
        var createRecordEvent = $A.get('e.force:createRecord');
        if (createRecordEvent) {
            component.set('v.showNewButton', true);
        }
    }
})