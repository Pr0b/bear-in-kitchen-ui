import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRecipeRoutingModule } from './inputRecipe-routing.module';
import { InputRecipeComponent } from './inputRecipe.component';

@NgModule({
  imports: [
    CommonModule,
    InputRecipeRoutingModule
  ],
  declarations: [InputRecipeComponent]
})
export class InputRecipeModule { }
