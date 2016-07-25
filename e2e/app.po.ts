export class AngularTourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-app h1')).getText();
  }
}
