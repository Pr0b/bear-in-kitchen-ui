import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipeRoutingModule} from './recipe-routing.module';
import {RecipeComponent} from './recipe.component';
import {RecipeFetcherService, StaticNumberIconMappingService} from '../../shared/services';
import {CommentsComponent, IngredientsComponent, OverviewComponent, ProtocolComponent} from './components';
import {StatModule} from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    StatModule
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
