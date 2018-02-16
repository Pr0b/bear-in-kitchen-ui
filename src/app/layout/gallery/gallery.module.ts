import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryComponent} from './gallery.component';
import {RecipeFetcherService} from '../../shared/services';
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {StatModule} from '../../shared';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    GalleryRoutingModule,
    StatModule
  ],
  declarations: [
    GalleryComponent,
    SearchbarComponent
  ],
  providers: [RecipeFetcherService]
})
export class GalleryModule {
}
