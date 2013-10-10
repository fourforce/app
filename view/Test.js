Ext.define('TestApp.view.Test', {
		requires: ['Ext.Toolbar'],
        extend: 'Ext.Container',
		config: {
			items: [
				{
					xtype: 'toolbar',
					docked: 'bottom',
					title: '',
					layout: {
						type: 'hbox',
						align: 'stretch',
						flex:1
					},
					items: [
						{
							xtype: 'container',
							layout: {
								type  : 'hbox',
								align : 'stretch'
							},
							items:[
								{
								xtype: 'container',							
								layout: {
									type  : 'vbox',
									align : 'left',
									flex: 1
								},
									items: [
										{
											xtype: 'button',
											docked: 'top',
											align: 'stretch',
											ui: 'answer1',
											text: 'Spaceship',
											width: 200,
											cls:'myButton'
										},
										{
											xtype: 'button',
											docked: 'bottom',
											ui: 'answer2',
											text: 'Spaceshuttle',
											width: 200,
											cls:'myButton'									
										},
									]	
								}								
							]	
														
						},
						{
							xtype: 'container',
							layout: {
								type  : 'hbox',
								align : 'stretch'
							},
							items:[
								{
								xtype: 'container',							
								layout: {
									type  : 'vbox',
									align : 'center',
									flex: 1
								},
									items: [
										{
											xtype: 'button',
											docked: 'top',
											align: 'stretch',
											ui: 'confirm',
											text: 'confirm',
											span:2,
											flex:2,
											width: 200,
											cls:'mycrlbt:before'
										}/*,
										{
											xtype: 'button',
											docked: 'bottom',
											ui: 'confirm',
											text: 'Confirm',
											width: 200,
											cls:'myButton'									
										},*/
									]	
								}								
							]	
														
						},						
						{
							xtype: 'container',
							layout: {
								type  : 'hbox',
								align : 'stretch'
							},
							items:[
								{
								xtype: 'container',							
								layout: {
									type  : 'vbox',
									align : 'left',
									flex: 1
								},
									items: [
										{
											xtype: 'button',
											docked: 'top',
											align: 'stretch',
											ui: 'answer1',
											text: 'Spaceship',
											width: 200,
											cls:'myButton'
										},
										{
											xtype: 'button',
											docked: 'bottom',
											ui: 'answer2',
											text: 'Spaceshuttle',
											width: 200,
											cls:'myButton'									
										},
									]	
								}								
							]	
														
						}						
					]
				}
			]			
		}
});
