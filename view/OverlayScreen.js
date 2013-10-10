Ext.define('TestApp.view.OverlayScreen', {
  extend: 'Ext.Panel',
  alias: 'widget.overlayScreen',
  config: {
	id: 'overlayScreen',
	html:'<p>Here is some content</p>',
	styleHtmlContent: true,
	hidden: true,
	modal: true,
	hideOnMaskTap:true,
	height: '200px',
	width: '200px',
	scrollable: 'vertical'	
  }
  }
 );