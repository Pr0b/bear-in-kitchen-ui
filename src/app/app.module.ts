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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    SearchbarComponent,
    FooterComponent,
    RecipeComponent
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
