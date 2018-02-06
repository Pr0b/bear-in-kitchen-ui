import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputRecipeRoutingModule} from './inputRecipe-routing.module';
import {InputRecipeComponent} from './inputRecipe.component';

import {AngularFireStorageModule} from 'angularfire2/storage';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {DynamicFormsNGBootstrapUIModule} from '@ng-dynamic-forms/ui-ng-bootstrap';
import {IngredientFetcherService} from '../../../shared/services/ingredientRepository/ingredient-fetcher.service';
import {FormatSelectOptionService} from './service/formatSelectOption.service';
import {CategoryFetcherService} from '../../../shared/services';

@NgModule({
  imports: [
    CommonModule,
    InputRecipeRoutingModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsNGBootstrapUIModule,
    AngularFireStorageModule
  ],
  declarations: [InputRecipeComponent],
  providers: [IngredientFetcherService, FormatSelectOptionService, CategoryFetcherService]
})
export class InputRecipeModule {
}
