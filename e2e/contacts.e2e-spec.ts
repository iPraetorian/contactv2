import { ContactPage } from './contacts.po';
import { element, browser, by, By, $$ } from 'protractor';

describe('contact page view', function () {
    var page: ContactPage;
    var contacts;
    beforeEach(() => {
        page = new ContactPage();
    });

    it('should display contacts with images and text', () => {
        page.navigateTo();
        expect(contacts.length).toBe(11);
            expect(contacts[0].getText()).toBe('/detail/1');
        //expect(page.getContactList()).toContain('Royal','Dale');

    });
});