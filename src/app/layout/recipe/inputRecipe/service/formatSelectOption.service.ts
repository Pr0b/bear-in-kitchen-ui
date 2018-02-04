import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {IngredientFetcherService} from '../../../../shared/services';

@Injectable()
export class FormatSelectOptionService {

  constructor(private afs: AngularFirestore,
              private ingredientFetcherService: IngredientFetcherService) {
  }

  getIngredients() {
    return this.ingredientFetcherService.getAllIngredientsWithChanges().map(ingredients => {
       return ingredients.map(ingredient => {
        const label = ingredient.name;
        const value = ingredient.id;
        return {label, value};
      });
    });
  }
}

export interface OptionValueItem {
  label: string;
  value: string;
}
