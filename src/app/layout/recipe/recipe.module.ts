import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import {ShareButtonsModule} from '@ngx-share/buttons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RecipeRoutingModule} from './recipe-routing.module';
import {RecipeComponent} from './recipe.component';
import {RecipeFetcherService, StaticNumberIconMappingService} from '../../shared/services';
import {CommentsComponent, IngredientsComponent, OverviewComponent, ProtocolComponent} from './components';
import {StatModule} from '../../shared';
import {RecipePhotoComponent} from './components/recipePhoto/recipePhoto.component';


@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    StatModule,
    NgbModule,
    HttpClientModule, // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    RecipeComponent,
    CommentsComponent,
    IngredientsComponent,
    OverviewComponent,
    RecipePhotoComponent,
    ProtocolComponent
  ],
  providers: [RecipeFetcherService, StaticNumberIconMappingService]
})
export class RecipeModule {
}
