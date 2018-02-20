import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeComponent} from './about-me.component';
import {AboutMeRoutingModule} from './about-me-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ],
  declarations: [AboutMeComponent]
})
export class AboutMeModule {
}
