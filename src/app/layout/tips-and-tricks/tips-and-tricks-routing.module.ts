import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TipsAndTricksComponent} from './tips-and-tricks.component';

const routes: Routes = [
  {
    path: '', component: TipsAndTricksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsAndTricksRoutingModule {
}
