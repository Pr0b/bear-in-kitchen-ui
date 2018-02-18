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
    // this.recipes = Observable.fromPromise(this.recipeFetcherService.getPagenatedRecipes());
    this.recipes = this.recipeFetcherService.getRecipes();
    this.recipes.subscribe(rec => {
      console.log(rec);
    });
  }

  onScroll() {
    console.log('scrolled!!');
    // const result = concat(this.recipes, this.recipeFetcherService.getPagenatedRecipes()).;
    //
    // var subscription = result.subscribe(
    //   function (x) {
    //     console.log('Next: ' + x);
    //   },
    //   function (err) {
    //     console.log('Error: ' + err);
    //   },
    //   function () {
    //     console.log('Completed');
    //   });
    //
    // this.recipes.subscribe(rec => {
    //   console.log(rec);
    // });
    // this.recipeFetcherService.getPagenatedRecipes().then( newRecipes => {
    //   this.recipes.subscribe(recipes => {
    //     console.log('newRecipes');
    //     console.log(newRecipes);
    //     this.recipes.concat(newRecipes);
    //     console.log('recipes');
    //     console.log(recipes);
    //   });
    // });
  }
}
