import { AzMetricsPage } from './app.po';

describe('az-metrics App', () => {
  let page: AzMetricsPage;

  beforeEach(() => {
    page = new AzMetricsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
