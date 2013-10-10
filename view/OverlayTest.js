Ext.define('TestApp.view.OverlayTest', {
  extend: 'Ext.Panel',
  alias: 'widget.overlayTest',
  initialize: function() {
	this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: 'New',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope: this
        };
		
	    var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            items: [
                { xtype: 'spacer' },
                newButton
            ]
        };
        this.add([topToolbar]);
  },
    onNewButtonTap: function () {
        console.log("newButtonCommand");
		
        this.fireEvent("newButtonCommand", this);
    },
    config: {
        layout: {
            type: 'card'
        }
    }	
 }
);

