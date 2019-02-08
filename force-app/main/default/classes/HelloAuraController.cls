public class HelloAuraController {

    @AuraEnabled( cacheable = true )
    public static List<Contact> getContactsByAccountId( ID accountId ) {

        System.debug( 'HelloAura: getting contacts for ' + accountId );

        return [ SELECT Id, Name FROM Contact WHERE AccountId = :accountId ORDER BY NAME LIMIT 10 ];

    }

    @AuraEnabled
    public static ID updateAccountName( ID accountId, String accountName ) {

        System.debug( 'HelloAura: updating account ' + accountId + ' to name ' + accountName );

        SavePoint sp = Database.setSavePoint();

        try {

			Account acct = new Account(
                Id = accountId,
                Name = accountName
            );

            update acct;

            return acct.Id;

        } catch ( Exception e ) {

            System.debug( LoggingLevel.ERROR, e.getMessage() + ' : ' + e.getStackTraceString() );
            Database.rollback( sp );
            throw new AuraHandledException( e.getMessage() );

        }

    }

}