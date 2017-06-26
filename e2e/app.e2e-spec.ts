import { Ng4PocPage } from './app.po';

describe('ng4-poc App', () => {
  let page: Ng4PocPage;

  beforeEach(() => {
    page = new Ng4PocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
