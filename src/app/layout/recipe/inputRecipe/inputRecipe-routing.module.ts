import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputRecipeComponent } from './inputRecipe.component';

const routes: Routes = [
    {
        path: '', component: InputRecipeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputRecipeRoutingModule {
}
