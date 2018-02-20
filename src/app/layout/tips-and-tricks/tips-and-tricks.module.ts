import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TipsAndTricksComponent} from './tips-and-tricks.component';
import {TipsAndTricksRoutingModule} from './tips-and-tricks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TipsAndTricksRoutingModule
  ],
  declarations: [TipsAndTricksComponent]
})
export class TipsAndTricksModule {
}
