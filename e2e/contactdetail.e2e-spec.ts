import { ContactDetailPage } from './contactdetail.po';
import { ContactPage } from './contacts.po';


describe('contact detail page', function () {
    var page: ContactDetailPage;

    beforeEach(() => {
        page = new ContactDetailPage();
    });

    it('should display Royal Robbins information', () => {
        //page.navigateTo();
        expect(page.getContactDetailRR).toContain('Royal');
    });


});