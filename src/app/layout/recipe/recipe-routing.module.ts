import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe.component';

const routes: Routes = [
  {
    path: 'new', loadChildren: './inputRecipe/inputRecipe.module#InputRecipeModule'
  },
  {
    path: ':id', component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {
}
