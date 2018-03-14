import { ContactDetailPage } from './contactdetail.po';



describe('contact detail page', function () {
    var page: ContactDetailPage;

        page = new ContactDetailPage();


    it('should display Royal Robbins information', () => {
        page.navigateTo();
        expect(page.getrRobbinsInfo).toContain('rRobins');
    });
})