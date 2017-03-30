import { RouterMasterPage } from './app.po';

describe('router-master App', () => {
  let page: RouterMasterPage;

  beforeEach(() => {
    page = new RouterMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
