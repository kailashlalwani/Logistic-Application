import { LightningElement } from 'lwc';
import { showToastEvent } from 'lightning/platformShowToastEvent';
import Customer_Information__c from '@salesforce/schema/Customer_Information__c';

import Name__c from '@salesforce/schema/Customer_Information__c.Name__c';
import Address__c from "@salesforce/schema/Customer_Information__c.Address__c";
import City__c from "@salesforce/schema/Customer_Information__c.City__c";
import Postal_Code__c from "@salesforce/schema/Customer_Information__c.Postal_Code__c";
import Province__c from "@salesforce/schema/Customer_Information__c.Province__c";
import Street__c from "@salesforce/schema/Customer_Information__c.Street__c";
import Quantity__c from "@salesforce/schema/Customer_Information__c.Quantity__c";
import Product__c from "@salesforce/schema/Customer_Information__c.Product__c";
import Email__c from "@salesforce/schema/Customer_Information__c.Email__c";

export default class CustomerInformation extends LightningElement {
    objectApiName = Customer_Information__c;
    fields = [Name__c, Address__c, City__c, Postal_Code__c, Province__c, Street__c, Quantity__c, Product__c, Email__c];
    handleSuccess(event)
    {
        const toastEvent = new showToastEvent({
            title: "Account Ceated Succesfully",
            message: "Record ID: " + event.detail.id,
            varient: "Success"
        });
        this.dispatchEvent(toastEvent);
    }
} 