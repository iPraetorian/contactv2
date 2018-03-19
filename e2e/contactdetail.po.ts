import { browser, element, by, By, $, $$, } from 'protractor';
import { retry } from 'rxjs/operators';
export class ContactDetailPage {
    navigateTo() {
        return browser.get('http://localhost:4200/detail/1');
    }

    getRoyalRobbinsH2Text() {
        return element(by.className('contacth2')).getText();
    };
}

