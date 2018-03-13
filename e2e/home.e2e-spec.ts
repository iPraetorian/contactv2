import { HomePage } from './home.po';
import { browser } from 'protractor';

describe('home page view', function () {
    var page: HomePage;
    beforeEach(() => {
        page = new HomePage();
    });

    it('should display a contacts and home button', () => {
        page.navigateTo();
       
    })
    
});