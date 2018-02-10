import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import {ShareButtonsModule} from '@ngx-share/buttons';

import {RecipeRoutingModule} from './recipe-routing.module';
import {RecipeComponent} from './recipe.component';
import {RecipeFetcherService, StaticNumberIconMappingService} from '../../shared/services';
import {CommentsComponent, IngredientsComponent, OverviewComponent, ProtocolComponent} from './components';
import {StatModule} from '../../shared';


@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    StatModule,
    HttpClientModule, // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    RecipeComponent,
    CommentsComponent,
    IngredientsComponent,
    OverviewComponent,
    ProtocolComponent
  ],
  providers: [RecipeFetcherService, StaticNumberIconMappingService]
})
export class RecipeModule {
}
