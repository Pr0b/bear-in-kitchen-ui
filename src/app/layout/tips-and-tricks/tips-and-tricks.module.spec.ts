import {TipsAndTricksModule} from './tips-and-tricks.module';

describe('TipsAndTricksModule', () => {
  let tipsAndTricksModule: TipsAndTricksModule;

  beforeEach(() => {
    tipsAndTricksModule = new TipsAndTricksModule();
  });

  it('should create an instance', () => {
    expect(tipsAndTricksModule).toBeTruthy();
  });
});
