import { ContactDetailPage } from './contactdetail.po';


describe('royal robbins contact info', function () {
    let page: ContactDetailPage;
    beforeEach(() => {
        page = new ContactDetailPage();
    });

    it('should display robbins name', () => {
       expect(page.getRoyalRobbinsH2Text()).toContain('ROYAL');
    });
})
