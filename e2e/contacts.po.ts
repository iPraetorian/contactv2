import { browser, by, element, $$ } from 'protractor';

export class ContactPage {
    navigateTo() {
        return browser.get ('/contacts');
    }

    getContactList() {
       return element(by.css('list')).isDisplayed(); 

    };    
}

  //return element(by.css('ul li')).getText();
        
        
        
        
        //**Arrary finder in progress */
        /* return element.all(by.css('ul li')).then(function(contacts) {
            expect(contacts.length).toBe(11);
            expect(contacts[0].getText()).toBe('/detail/1');
        })*/
