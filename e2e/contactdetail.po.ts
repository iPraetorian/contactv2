import { browser, by, element, $, $$ } from 'protractor';

export class ContactDetailPage {
    navigateTo() {
        return browser.get('http://localhost:4200/detail/1');
    }
    getrRobbinsInfo(){
        return element(by.binding('/assets/images/rRobbins.jpg'));
    };
}
