({
	handleToggle : function(component, event, helper) {
		
	},
    
    handleChange : function(component, event, helper) {
		
	},
    
    init: function (component, event, helper) {
        var options = [
            { value: "new", label: "New" },
            { value: "in-progress", label: "In Progress" },
            { value: "finished", label: "Finished" }
        ];
        component.set("v.statusOptions", options);
        
        component.set('v.mycolumns', [
                {label: 'Opportunity name', fieldName: 'opportunityName', type: 'text'},
                {label: 'Confidence', fieldName: 'confidence', type: 'percent'},
                {label: 'Amount', fieldName: 'amount', type: 'currency', typeAttributes: { currencyCode: 'EUR'}},
                {label: 'Contact Email', fieldName: 'contact', type: 'email'},
                {label: 'Contact Phone', fieldName: 'phone', type: 'phone'}
            ]);
        component.set('v.mydata', [{
                id: 'a',
                opportunityName: 'Cloudhub',
                confidence: 0.2,
                amount: 25000,
                contact: 'jrogers@cloudhub.com',
                phone: '2352235235'
            },
            {
                id: 'b',
                opportunityName: 'Quip',
                confidence: 0.78,
                amount: 740000,
                contact: 'quipy@quip.com',
                phone: '2352235235'
            }]);
        
        var options1 = [
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
            { value: "4", label: "Option 4" },
            { value: "5", label: "Option 5" },
            { value: "6", label: "Option 6" },
            { value: "7", label: "Option 7" },
            { value: "8", label: "Option 8" },
        ];
        var values1 = ["7", "2", "3"];
        var required1 = ["2", "7"];
        component.set("v.listOptions", options1);
        component.set("v.defaultOptions", values1);
        component.set("v.requiredOptions", required1);
        
        var content = "<h1>Hello!</h1>";
        component.set("v.richtext", content);
        
        
        var items = [{
            "label": "Western Sales Director",
            "name": "1",
            "expanded": true,
            "items": [{
                "label": "Western Sales Manager",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "CA Sales Rep",
                    "name": "3",
                    "expanded": true,
                    "items" : []
                },{
                    "label": "OR Sales Rep",
                    "name": "4",
                    "expanded": true,
                    "items" : []
                }]
            }]
        }, {
            "label": "Eastern Sales Director",
            "name": "5",
            "expanded": false,
            "items": [{
                "label": "Easter Sales Manager",
                "name": "6",
                "expanded": true,
                "items" :[{
                    "label": "NY Sales Rep",
                    "name": "7",
                    "expanded": true,
                    "items" : []
                }, {
                    "label": "MA Sales Rep",
                    "name": "8",
                    "expanded": true,
                    "items" : []
                }]
            }]
        }];
        component.set('v.items', items);
    },
    
    getSelectedName: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        // Display that fieldName of the selected rows
        for (var i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].opportunityName);
        }
    },
    
    handleShowNotice : function(component, event, helper) {
        component.find('notifLib').showNotice({
            "variant": "error",
            "header": "Something has gone wrong!",
            "message": "Unfortunately, there was a problem updating the record.",
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
    },
    
    handleShowModal: function(component, evt, helper) {
        var modalBody;
        $A.createComponent("c:Refresher_Winter_18_Page_1", {},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   modalBody = content;
                                   component.find('overlayLib').showCustomModal({
                                       header: "Application Confirmation",
                                       body: modalBody, 
                                       showCloseButton: true,
                                       cssClass: "mymodal",
                                       closeCallback: function() {
                                           alert('You closed the alert!');
                                       }
                                   })
                                   
                               }
                               
                           });
    },
    
    showProgress: function (cmp) {
        var interval = setInterval($A.getCallback(function () {
            var progress = cmp.get('v.progress');
            cmp.set('v.progress', progress === 100 ? clearInterval(interval) : progress + 10);
        }), 200);
    },
    
    handleChangeOption: function (cmp, event) {
        var changeValue = event.getParam("value");
        alert(changeValue);
    }
    
})