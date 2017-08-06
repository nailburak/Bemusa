import { BemusaPage } from './app.po';

describe('bemusa App', () => {
  let page: BemusaPage;

  beforeEach(() => {
    page = new BemusaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
