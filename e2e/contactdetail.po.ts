import { browser, element, by, By, $, $$, } from 'protractor';
export class ContactDetailPage {
    navigateTo() {
        return browser.get('http://localhost:4200/detail/1');
    }

    // getRoyalRobbinsH2Text() {
    //     return element.all(by.css(''')).getText();
    // }

    getRoyalRobbinsTitle() {
        return element(by.cssContainingText('Title', 'Climber')).isDisplayed();
    }
}

