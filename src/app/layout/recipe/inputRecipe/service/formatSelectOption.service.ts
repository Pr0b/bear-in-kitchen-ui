import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {CategoryFetcherService, IngredientFetcherService} from '../../../../shared/services';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FormatSelectOptionService {

  constructor(private afs: AngularFirestore,
              private ingredientFetcherService: IngredientFetcherService,
              private categoryFetcherService: CategoryFetcherService) {
  }

  getIngredients(): Observable<OptionValueItem[]> {
    return this.ingredientFetcherService.getAllIngredientsWithChanges().map(ingredients => {
      return ingredients.map(ingredient => {
        const label = ingredient.name;
        const value = ingredient.id;
        return {label, value};
      });
    });
  }

  getRecipeCategories(): Observable<OptionValueItem[]> {
    return this.categoryFetcherService.getAllRecipeCategoriesWithChanges().map(recipeCategories => {
      return recipeCategories.map(recipeCategory => {
        const label = recipeCategory.name;
        const value = recipeCategory.id;
        return {label, value};
      });
    });
  }
}

export interface OptionValueItem {
  label: string;
  value: string;
}
