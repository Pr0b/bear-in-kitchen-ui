import {Component, OnInit} from '@angular/core';
import {RecipeFetcherService} from '../../shared/services';
import {routerTransition} from '../../router.animations';

import {RecipeDetail} from '../recipe/recipe.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {
  recipes$: Promise<RecipeDetail[]>;
  recipes: RecipeDetail[];

  constructor(private recipeFetcherService: RecipeFetcherService) {
    this.recipes = [];
  }

  ngOnInit() {
    this.recipes$ = this.recipeFetcherService.getPagenatedRecipes();
    this.recipes$.then(recipes => {
      this.recipes = this.recipes.concat(recipes);
      console.log(this.recipes);
    });
  }

  onScroll() {
    console.log('scrolled!!');
    this.recipeFetcherService.getPagenatedRecipes().then( recipes => {
      this.recipes = this.recipes.concat(recipes);
      console.log(this.recipes);
    });
    // this.recipes$ = this.recipes$.merge(this.recipeFetcherService.getPagenatedRecipes());

    // this.recipes$.subscribe(rec => {
    //   this.recipeFetcherService.getPagenatedRecipes().then( newRecipe => {
    //
    //   });
    // });
    // const result = concat(this.recipes$, ).;
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
    // this.recipes$.subscribe(rec => {
    //   console.log(rec);
    // });
    // this.recipeFetcherService.getPagenatedRecipes().then( newRecipes => {
    //   this.recipes$.subscribe(recipes$ => {
    //     console.log('newRecipes');
    //     console.log(newRecipes);
    //     this.recipes$.concat(newRecipes);
    //     console.log('recipes$');
    //     console.log(recipes$);
    //   });
    // });
  }
}
