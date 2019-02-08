({
	onInit: function( component, event, helper ) {
        console.log( 'helloAura: onInit' );
		helper.startCounting( component );
	},
    
    onRender: function( component, event, helper ) {
        console.log( 'helloAura: onRender, counter=' + component.get( 'v.counter' ) );
    },
    
    onLocationChange: function( component, event, helper ) {
        console.log( 'helloAura: onLocationChange' );
        helper.stopCounting( component );
    },
    
    onShowContacts: function( component, event, helper ) {
        console.log( 'helloAura: onShowContacts' );        
        helper.showContacts( component );
    },
    
    onUpdateName: function( component, event, helper ) {
        console.log( 'helloAura: onUpdateName' );
        helper.updateAccountName( component );
    }
})