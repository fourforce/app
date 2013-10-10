Ext.define('TestApp.view.Main', {
  extend: 'Ext.Container',
  xtype: 'main',
  config: {
		 layout: {
			type: 'card',
			animation: 'flip'
		 },
		 itemId: 'mycontainer',
		 cls: 'colorizeParent',
		 fullscreen: true,
		 defaults: {
		  xtype: 'component',
		  cls: 'colorizeChild',
		  margin: '5 5 5 5'
		 },
		 items: [
			{  
				xtype: 'image',
				src: 'resources/image1.jpg',
			},
			{  
				xtype: 'image',
				src: 'resources/image2.jpg',			
			},
		  {
			 xtype: 'button',
			 docked: 'bottom',
			 text: 'Submit',
			 /*handler: function() {
				var cntr = Ext.ComponentQuery.query("#mycontainer")[0];
				cntr.setActiveItem(1);
			 } */         
			 listeners: {
			        tap: function (button, e, eOpts) {
			            if (!button.picker) {
			                button.picker = Ext.widget('picker', {
			                    slots: [{ // 
			                        name: 'options',
			                        title: 'Answers',
			                        data: [{
			                            text: 'Winter', value: 'winter'
			                        }, {
			                            text: 'Fall', value: 'fall'
			                        }, {
			                            text: 'Summer', value: 'summer'
			                        }, {
			                            text: 'Spring', value: 'spring'
			                        }]
			                    }],
			                    listeners: {    // 
			                        cancel: function (picker, opts) {
			                            //Ext.Msg.alert('cancel', 'Picker has been canceled');
			                            button.picker.hide();
			                        },
			                        change: function (picker, value, opts) {
			                            //Ext.Msg.alert('chance', 'Picker has value: ' + Ext.JSON.encode(value));
			            				var cntr = Ext.ComponentQuery.query("#mycontainer")[0];
			            				cntr.setActiveItem(1);			                        	
			                        }
			                    }
			                });
			                Ext.Viewport.add(button.picker); // 
			            }
			            button.picker.show(); // 
			        }
			    }		 
			}
		 ]
	}
 }
);

