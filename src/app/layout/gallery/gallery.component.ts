import {Component, OnInit} from '@angular/core';
import {RecipeFetcherService} from '../../shared/services';
import {routerTransition} from '../../router.animations';

import {RecipeDetail} from '../recipe/recipe.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {
  recipes: Observable<RecipeDetail[]>;

  constructor(private recipeFetcherService: RecipeFetcherService) {
  }

  ngOnInit() {
    this.recipes = this.recipeFetcherService.getRecipes();
    this.recipes.subscribe(rec => {
      console.log(rec);
    });
  }
}
