import { browser, by, element } from 'protractor';

export class ContactPage {
    navigateTo() {
        return browser.get ('/contacts');
    }

    getContactList() {
        return element(by.className('cID')).getText();
    }
}