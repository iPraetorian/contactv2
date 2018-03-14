import { AppPage } from './app.po';

describe('contact-appv2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Project Contacts');
  });
});
