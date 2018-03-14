import { browser, by, element, $$ } from 'protractor';

export class ContactPage {
    navigateTo() {
        return browser.get ('/contacts');
    }

    getContactList() {
        //return element(by.className('cID')).getText();
        return element.all(by.css('.contacts li')).then(function(contacts) {
            expect(contacts.length).toBe(11);
            expect(contacts[0].getText()).toBe('/detail/1');
        })

    }
}
