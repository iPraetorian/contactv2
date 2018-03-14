import { ContactPage } from './contacts.po';
import { element, browser, by, By, $$ } from 'protractor';

describe('contact page view', function () {
    var page: ContactPage;
    let list = element.all(by.css('.contacts li'));
    beforeEach(() => {
        page = new ContactPage();
    });

    it('should display list of contacts', () => {
        page.navigateTo();
        expect(list.count()).toBe(10);

    });
});


        //expect(page.getContactList()).toContain('Royal Robbins');
        

        //Array finder
        // expect(contacts.length).toBe(11);
        // expect(contacts[0].getText()).toBe('/detail/1');