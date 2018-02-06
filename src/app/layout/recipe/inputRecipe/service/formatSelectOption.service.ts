import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {CategoryFetcherService, IngredientFetcherService} from '../../../../shared/services';
import {Observable} from 'rxjs/Observable';
import {RecipeCategoryRecipe} from '../../recipe.component';

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

  getRecipeCategories(): Observable<OptionValueItem<RecipeCategoryRecipe>[]> {
    return this.categoryFetcherService.getAllRecipeCategoriesWithChanges().map(recipeCategories => {
      return recipeCategories.map(recipeCategory => {
        const label = recipeCategory.name;
        const value = {
          refCategory: recipeCategory.id,
          icon: recipeCategory.icon,
          name: recipeCategory.name,
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
