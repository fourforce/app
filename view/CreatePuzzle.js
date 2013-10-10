Ext.define('TestApp.view.CreatePuzzle', {	
	extend: 'Ext.form.Panel',
	requires: ['Ext.form.FieldSet',
	           'Ext.field.Text',
	           'Ext.Label',
	           'Ext.field.Radio',
	           'Ext.Toolbar',
	           'Ext.ux.Fileup'],
	alias: 'widget.createpuzzle',
	initialize: function() {
		this.callParent(arguments);
		
		var labeluploadimage = {
				xtype: 'label',
				itemId: 'labeluploadimage',
		        html:   'Upload the image:'
		};
		
		var loadImage = {
				xtype: 'fileupload',
				itemId: 'fileBtn',
                autoUpload: false,
                url: 'src/php/getfile.php'
		};
		
		var imageName = {
				xtype: 'textfield',
				name: 'imageName',
				label: 'Image Name',
				required: true
		};
		
		var guess1 = {
				xtype: 'textfield',
				name: 'guess1',
				label: 'Guess 1',
				required: true
		};
		
	
		var guess2 = {
				xtype: 'textfield',
				name: 'guess2',
				label: 'Guess 2',
				required: true
		};
		
		var guess3 = {
				xtype: 'textfield',
				name: 'guess3',
				label: 'Guess 3',
				required: true
		};
		
		var guess4 = {
				xtype: 'textfield',
				name: 'guess4',
				label: 'Guess 4',
				required: true
		};		
		
		var labelcorrectguess = {
				xtype: 'label',
				itemId: 'labelcorrectguess',
		        html:   'Select the correct answer below:'
		};	
		
		var select1 = {
				xtype: 'radiofield',
				name: 'correctguess',
				label: 'Guess 1'
		};			
		var select2 = {
				xtype: 'radiofield',
				name: 'correctguess',
				label: 'Guess 2'
		};	
		var select3 = {
				xtype: 'radiofield',
				name: 'correctguess',
				label: 'Guess 3'
		};	
		var select4 = {
				xtype: 'radiofield',
				name: 'correctguess',
				label: 'Guess 4'
		};			
		
		
		var cancelButton = {
			xtype: 'button',
			text: 'Cancel',
			handler: this.onCancelButtonTap,
			scope: this
		};
		
		var submitButton = {
			xtype: 'button',
			text: 'Submit',
			handler: this.onSubmitButtonTap,
			scope: this
		};
		
		var bottomToolbar = {
				xtype: 'toolbar',
				docked: 'bottom',
				items: [{xtype: 'spacer'}, cancelButton, submitButton]
					
		}
		
		this.add([
		          {
		        	  xtype: 'fieldset',
		        	  items: [labeluploadimage, loadImage, imageName, guess1, guess2, guess3, guess4, labelcorrectguess, select1, select2, select3, select4]
		          },
		          bottomToolbar
		          ]);
	},
	
	onSubmitButtonTap: function() {
		console.log("submit the user credentials");
		this.fireEvent("submitCredentialsCommand", this);
	},
	
	onCancelButtonTap: function() {
		console.log("cancel the user input");
		this.fireEvent("cancelUserInputCommand", this);
	}

});