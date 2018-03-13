import { HomePage } from './home.po';
import { browser, element, by } from 'protractor';

describe('home page view', function () {
    var page: HomePage;
    beforeEach(() => {
        page = new HomePage();
    });

    it('should display a silhouette image on home page', () => {
        page.navigateTo();
        expect(page.getImageSilhouette().isPresent);


    });

});