import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {CategoryFetcherService, IngredientFetcherService} from '../../../../shared/services';
import {Observable} from 'rxjs/Observable';
import {RecipeCategory, TagRecipe} from '../../recipe.component';

@Injectable()
export class FormatSelectOptionService {

  constructor(private afs: AngularFirestore,
              private ingredientFetcherService: IngredientFetcherService,
              private categoryFetcherService: CategoryFetcherService) {
  }

  getIngredients(): Observable<OptionValueItem<string>[]> {
    return this.ingredientFetcherService.getAllIngredientsWithChanges().map(ingredients => {
      return ingredients.map(ingredient => {
        const label = ingredient.name;
        const value = ingredient.id;
        return {label, value};
      });
    });
  }

  getRecipeCategories(): Observable<OptionValueItem<RecipeCategory>[]> {
    return this.categoryFetcherService.getAllRecipeCategoriesWithChanges().map(recipeCategories => {
      return recipeCategories.map(recipeCategory => {
        const label = recipeCategory.name;
        const value = {
          id: recipeCategory.id,
          icon: recipeCategory.icon,
          name: recipeCategory.name,
        };
        return {label, value};
      });
    });
  }

  getRecipeTags(): Observable<OptionValueItem<TagRecipe>[]> {
    return this.categoryFetcherService.getAllTagsWithChanges().map(tagRecipes => {
      return tagRecipes.map(tagRecipe => {
        const label = tagRecipe.name;
        const value = {
          refTag: tagRecipe.id,
          name: tagRecipe.name,
        };
        return {label, value};
      });
    });
  }
}

export interface OptionValueItem<T> {
  label: string;
  value: T;
}
