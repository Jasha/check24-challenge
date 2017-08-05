import { Check24ChallengePage } from './app.po';

describe('check24-challenge App', () => {
  let page: Check24ChallengePage;

  beforeEach(() => {
    page = new Check24ChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to c24!');
  });
});
