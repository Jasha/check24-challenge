import { browser, by, element } from 'protractor';

export class Check24ChallengePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('c24-root h1')).getText();
  }
}
