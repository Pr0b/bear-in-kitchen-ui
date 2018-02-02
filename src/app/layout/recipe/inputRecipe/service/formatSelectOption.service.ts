import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {IngredientFetcherService} from '../../../../shared/services/ingredientRepository/ingredient-fetcher.service';

@Injectable()
export class FormatSelectOptionService {

  constructor(private afs: AngularFirestore,
              private ingredientFetcherService: IngredientFetcherService) {
  }

  getIngredients() {
    console.log('getIngredients start');
    const array = [];
    return this.ingredientFetcherService.getAllIngredients().map( ingredients => {
      ingredients.forEach( ingredient => {
        const label = ingredient.name;
        const value = ingredient.name;
        array.push({label, value});
      });
      return array;
    });
  }
}

export interface OptionValueItem {
  label: string;
  value: string;
}
