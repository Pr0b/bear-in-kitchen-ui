import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { appRoutes } from '../routes'

import { RecipeFetcherService } from './services/recipe-fetcher.service';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ProtocolComponent } from './components/recipe/protocol/protocol.component';
import { CommentsComponent } from './components/recipe/comments/comments.component';
import { OverviewComponent } from './components/recipe/overview/overview.component';
import { IngredientsComponent } from './components/recipe/ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    SearchbarComponent,
    FooterComponent,
    RecipeComponent,
    ProtocolComponent,
    CommentsComponent,
    OverviewComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
