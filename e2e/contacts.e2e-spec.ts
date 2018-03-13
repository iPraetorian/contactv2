import { ContactPage } from './contacts.po';
import { browser } from 'protractor';

describe('contact page view', function () {
    var page: ContactPage;
    beforeEach(() => {
        page = new ContactPage();
    });

    it('should display contacts with images and text', () => {
        page.navigateTo();
        expect(page.getContactList()).toContain('Royal','Dale');

    });
});