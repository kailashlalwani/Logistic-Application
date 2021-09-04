import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Customer_Information__c from '@salesforce/schema/Customer_Information__c'


import Name from "@salesforce/schema/Customer_Information__c.Name";
import Name__c from "@salesforce/schema/Customer_Information__c.Name__c";
import Email__c from "@salesforce/schema/Customer_Information__c.Email__c";
import Address__c from "@salesforce/schema/Customer_Information__c.Address__c";
import City__c from "@salesforce/schema/Customer_Information__c.City__c";
import Postal_Code__c from "@salesforce/schema/Customer_Information__c.Postal_Code__c";
import Province__c from "@salesforce/schema/Customer_Information__c.Province__c";
import Street__c from "@salesforce/schema/Customer_Information__c.Street__c";
import Quantity__c from "@salesforce/schema/Customer_Information__c.Quantity__c";
import Unit_Price__c from "@salesforce/schema/Customer_Information__c.Unit_Price__c";
import Product__c from "@salesforce/schema/Customer_Information__c.Product__c";

export default class CustomerInformation extends LightningElement {
    objectApiName = Customer_Information__c;
    fields = [Name, Name__c, Email__c,  Address__c, City__c, Postal_Code__c, Province__c, Street__c, Quantity__c, Unit_Price__c, Product__c];
    handleSuccess()
    {
        const toastEvent = new ShowToastEvent({
            title: "Success!",
            message: "New Customer record succesfully Created",
            varient: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}