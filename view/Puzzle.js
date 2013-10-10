Ext.define('TestApp.view.Puzzle', {
  extend: 'Ext.Container',
  xtype: 'puzzle',
  requires: ['Ext.field.Slider'],
  config: {
	defaults: {
		margin: 10
	},
	layout: {
		type: 'vbox'
	},
	items: [
		{
			xtype: 'container',
			layout: 'card',
			activeItem: 1,
			flex: 10,
			items: [
				{
					xtype: 'image',
					src: 'resources/pictures/image1.jpg'
				}						
			]			
		},
		{
			xtype: 'container',
			flex: 1,
			items: [
				{
					xtype: 'button',
					flex: 1,
					border: 2,
					text: 'Answer1'
				}
			]
		},
		{
			xtype: 'container',
			flex: 1,
			items: [
				{
					xtype: 'button',
					flex: 1,
					border: 2,
					text: 'Answer2'					,
					cls: 'btn_correct'
				}
			]
		},
		{
			xtype: 'container',
			flex: 1,
			items: [
				{
					xtype: 'button',
					flex: 1,
					border: 2,
					text: 'Answer3',
					cls: 'btn_incorrect'					
				}
			]
		},
		{
			xtype: 'container',
			flex: 1,
			items: [
				{
					xtype: 'button',
					flex: 1,
					border: 2,
					text: 'Answer4',
									
					handler: function() {
						console.log("Clicked answer 4");
						
					}
				}
			]
		},
		{
				xtype: 'toolbar',
				docked: 'bottom',
                scrollable: false,
                items: [
                    {
                        title: 'About',
                        iconCls: 'info'
                    },				
                    {
                        xtype: 'spacer'
                    },
                    {
                        /*text: 'Show',
						ui: 'round'*/
						xtype: 'sliderfield',
						listeners : {
							 change: function(slider, thumb, newValue, oldValue){
								console.log("change event");
							 },
							 dragend: function(slider, thumb, value){
							 	console.log("Show the answer now");
							 }
						 }
                    },
					{
                        xtype: 'spacer'
                    },
                    {
                        //xtype: 'textfield',
						//width: 100,
						//placeHolder: 'Score',
						//name: 'scoreField'
						title: 'Score',
						iconCls: 'star',
						badgeText: '30'
                    }
                ]			
		}
	]
	}
 }
);

