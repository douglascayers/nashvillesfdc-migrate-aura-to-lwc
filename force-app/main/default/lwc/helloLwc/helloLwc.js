/* eslint-disable no-console */
/* eslint-disable @lwc/lwc/no-async-operation */

import { LightningElement, api, track, wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';
import { updateRecord, generateRecordInputForUpdate } from 'lightning/uiRecordApi';

import getContactsByAccountId from '@salesforce/apex/HelloAuraController.getContactsByAccountId';

import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class HelloLwc extends LightningElement {

    @track
    timerId;

    @track
    counter = 0;

    @api
    recordId;

    @wire( getRecord, { recordId: '$recordId', fields: [ NAME_FIELD ] } )
    account;

    @track
    contacts = [];

    connectedCallback() {
        console.log( 'helloLWC: connectedCallback' );
        this.timerId = setInterval( () => {
            this.counter++;
        }, 1000 );
    }

    renderedCallback() {
        console.log( 'helloLWC: renderedCallback, counter=' + this.counter );
    }

    disconnectedCallback() {
        console.log( 'helloLWC: disconnectedCallback' );
        clearInterval( this.timerId );
    }

    get counterGreaterThanFive() {
        return this.counter > 5;
    }

    get contactsCssClass() {
        return ( this.contacts && this.contacts.length > 0 ) ? '' : 'slds-hide';
    }

    onShowContacts() {
        console.log( 'helloLWC: onShowContacts' );
        getContactsByAccountId({ accountId: this.recordId })
            .then( result => {
                this.contacts = result;
            })
            .catch( error => {
                console.error( JSON.stringify( error, null, 2 ) );
            });
    }

    onUpdateName() {
        console.log( 'helloLWC: onUpdateName' );
        let currName = this.account.data.fields.Name.value;
        let newName = ( currName === currName.toUpperCase() ) ? currName.toLowerCase() : currName.toUpperCase();
        let recordToUpdate = generateRecordInputForUpdate({
            apiName: 'Account',
            id: this.recordId,
            fields: {
                Name: {
                    value: newName
                }
            }
        });
        updateRecord( recordToUpdate )
            .then( result => {
                console.log( JSON.stringify( result, null, 2 ) );
            })
            .catch( error => {
                console.error( JSON.stringify( error, null, 2 ) );
            });
    }

}