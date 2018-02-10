import {RecipeModule} from './recipe.module';

describe('GalleryModule', () => {
  let recipeModule: RecipeModule;

  beforeEach(() => {
    recipeModule = new RecipeModule();
  });

  it('should create an instance', () => {
    expect(recipeModule).toBeTruthy();
  });
});
