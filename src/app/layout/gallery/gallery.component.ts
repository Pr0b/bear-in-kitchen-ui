import {Component, OnInit} from '@angular/core';
import {RecipePaginatedFetcherService} from '../../shared/services';
import {routerTransition} from '../../router.animations';
import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/concat';
import {RecipeDetail} from '../recipe/recipe.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {
  recipes: Observable<RecipeDetail[]>;

  constructor(private recipePaginatedFetcherService: RecipePaginatedFetcherService) {
  }

  ngOnInit() {
    console.log('init!!');
    this.recipePaginatedFetcherService.init();
    //   .map( ( [ x, y ] ) => ( [ ...x, ...y ] ) ).subscribe( arr =>
    //     this.recipes = arr;
    // );

    // this.recipePaginatedFetcherService.init().subscribe(recipes => {
    //    concat(recipes);
    // });
    // this.recipePaginatedFetcherService.data.subscribe(array => {
    //   console.log('--==start==--');
    //   array.forEach(item => {
    //     console.log('item.id=' + item.id);
    //   });
    //   console.log('--==end==--');
    // });
  }

  onScroll() {
    this.recipePaginatedFetcherService.more();
    // console.log('scrolled!!');
    // this.recipePaginatedFetcherService.more().subscribe(recipes => {
    //   this.recipes.concat(recipes);
    // });
    // this.recipePaginatedFetcherService.data.subscribe(array => {
    //   array.forEach(item => {
    //     console.log('--==start==--');
    //     console.log('item.id=' + item.id);
    //   });
    //   console.log('--==end==--');
    // });
  }
}
