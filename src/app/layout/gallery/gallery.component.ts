import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Observable} from 'rxjs';
import {RecipeDetail} from '../recipe/recipe.component';
import {RecipeFetcherService} from '../../shared/services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {
  recipes: Observable<RecipeDetail[]>;

  constructor(public recipeFetcherService: RecipeFetcherService) {
  }

  ngOnInit() {
    this.recipes = this.recipeFetcherService.getRecipes();
  }
}
