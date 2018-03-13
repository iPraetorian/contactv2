import { browser, by, element } from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/');
    }

    getButtonText() {
        return element(by.class('btns')).getText();
    }
}