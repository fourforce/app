Ext.define("TestApp.controller.Overlay", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            overlayScreen: "overlayScreen",
			overlayTest: "overlayTest"
        },
        control: {
            overlayTest: {
                // The commands fired by the notes list container.
                newButtonCommand: "onNewNoteCommand"
            }
        }
    },

    // Commands.
    onNewNoteCommand: function () {
        console.log("onNewNoteCommand"); 
		var i=1;
		
				this.getOverlayTest().setHtml("<img src=\"/TestApp/resources/pictures/image" + (i+1) +".jpg\"/>");	
	
    },

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        console.log("launch");
	
			this.getOverlayTest().setHtml("<img src=\"/TestApp/resources/pictures/image1.jpg\"/>");			
	
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});