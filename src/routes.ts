import { Routes } from "@angular/router"
import { GalleryComponent } from './app/components/gallery/gallery.component';
import { RecipeComponent } from './app/components/recipe/recipe.component';

export const appRoutes:Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "image/:id", component: RecipeComponent },
  { path: "", redirectTo: "/gallery", pathMatch: 'full' },
]