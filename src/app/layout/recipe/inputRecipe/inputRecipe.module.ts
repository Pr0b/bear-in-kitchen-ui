import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputRecipeRoutingModule} from './inputRecipe-routing.module';
import {InputRecipeComponent} from './inputRecipe.component';

import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {DynamicFormsNGBootstrapUIModule} from '@ng-dynamic-forms/ui-ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    InputRecipeRoutingModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsNGBootstrapUIModule
  ],
  declarations: [InputRecipeComponent]
})
export class InputRecipeModule {
}
