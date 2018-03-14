import { browser, by, element, $, $$ } from 'protractor';

export class ContactDetailPage {
    navigateTo() {
        return browser.get('/contacts');
    }

    getContactDetailRR() {
        return element(by.css('ul li /detail/1')).click();
        
    };
};