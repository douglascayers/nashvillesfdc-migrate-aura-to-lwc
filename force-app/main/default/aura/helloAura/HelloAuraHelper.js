({
	startCounting: function( component ) {
        console.log( 'helloAura: startCounting' );
        const timerId = setInterval( $A.getCallback( function() {
            let counter = component.get( 'v.counter' );
            counter = counter + 1;
            component.set( 'v.counter', counter );
        }), 1000 );
        component.set( 'v.timerId', timerId );
	},
    
    stopCounting: function( component ) {
        console.log( 'helloAura: stopCounting' );
        clearInterval( component.get( 'v.timerId' ) );
    },
    
    showContacts: function( component ) {
        let action = component.get( 'c.getContactsByAccountId' );
        action.setParams({
            'accountId' : component.get( 'v.recordId' )
        });
        action.setCallback( this, function( response ) {
            component.set( 'v.contacts', response.getReturnValue() );
        });
        $A.enqueueAction( action );
    },
    
    updateAccountName: function( component ) {
        let account = component.get( 'v.ldsSimpleRecord' );
        let action = component.get( 'c.updateAccountName' );
        let name = ( account.Name == account.Name.toUpperCase() ? account.Name.toLowerCase() : account.Name.toUpperCase() );
        action.setParams({
            'accountId': account.Id,
            'accountName': name
        });
        action.setCallback( this, function( response ) {
			component.find( 'lds' ).reloadRecord( true );
        });
        $A.enqueueAction( action );
    }
})