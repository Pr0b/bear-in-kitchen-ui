import {Component, OnInit} from '@angular/core';
import {RecipeFetcherService} from '../../shared/services';
import {routerTransition} from '../../router.animations';

import { RecipeDetail } from '../recipe/recipe.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {
  recipes: RecipeDetail[];

  constructor(private recipeFetcherService: RecipeFetcherService) {
  }

  ngOnInit() {
    this.recipeFetcherService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
