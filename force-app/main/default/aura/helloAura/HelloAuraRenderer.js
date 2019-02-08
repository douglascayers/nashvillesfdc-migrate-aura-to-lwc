({    
    unrender: function( component, helper ) {
        console.log( 'helloAura: unrendering' );
  		this.superUnrender();
		// do custom unrendering here
		helper.stopCounting( component );
    }
})