import { InputRecipeModule } from './inputRecipe.module';

describe('InputRecipeModule', () => {
  let inputRecipeModule: InputRecipeModule;

  beforeEach(() => {
    inputRecipeModule = new InputRecipeModule();
  });

  it('should create an instance', () => {
    expect(inputRecipeModule).toBeTruthy();
  });
});
