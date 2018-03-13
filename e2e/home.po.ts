import { browser, by, element } from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/');
    }

    getImageSilhouette() {
        return element(by.binding('/assets/images/people.jpg'));
    }
}