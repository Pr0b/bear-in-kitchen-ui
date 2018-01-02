import { Routes } from "@angular/router"
import { GalleryComponent } from './app/components/gallery/gallery.component';

export const appRoutes:Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "", redirectTo: "/gallery", pathMatch: 'full' },
]