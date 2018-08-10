import { HtmsNewPage } from './app.po';

describe('htms-new App', () => {
  let page: HtmsNewPage;

  beforeEach(() => {
    page = new HtmsNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
