import { SdhPage } from './app.po';

describe('sdh App', () => {
  let page: SdhPage;

  beforeEach(() => {
    page = new SdhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
