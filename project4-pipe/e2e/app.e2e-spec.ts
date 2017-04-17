import { Project4PipePage } from './app.po';

describe('project4-pipe App', () => {
  let page: Project4PipePage;

  beforeEach(() => {
    page = new Project4PipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
