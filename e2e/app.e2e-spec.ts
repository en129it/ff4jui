import { JavascriptPage } from './app.po';

describe('javascript App', () => {
  let page: JavascriptPage;

  beforeEach(() => {
    page = new JavascriptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
