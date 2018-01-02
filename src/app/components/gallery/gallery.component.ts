import { Component, OnInit } from '@angular/core';
import { RecipeFetcherService } from '../../services/recipe-fetcher.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  recipePhotos:RecipePhoto[];

  constructor(private recipeFetcherService:RecipeFetcherService) { }

  ngOnInit() {
    this.recipeFetcherService.getRecipePhotos().subscribe((recipePhotos) => {
      this.recipePhotos = recipePhotos;
    });
  }
}

interface RecipePhoto{
  "albumId": number,
  "id": number,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}
