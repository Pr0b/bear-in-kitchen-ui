import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {RecipeCategory, RecipeDetail, Tag} from '../../recipe.component';
import {Observable} from 'rxjs';
import {CategoryFetcherService} from '../../../../shared/services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public href = '';
  public recipeCategory: Observable<RecipeCategory>;
  @Input() recipe: Observable<RecipeDetail>;


  constructor(private router: Router, private categoryFetcherService: CategoryFetcherService) {
    this.href = this.router.url;
  }

  ngOnInit() {
    this.recipe.subscribe(recipe => {
      this.recipeCategory = this.categoryFetcherService.getRecipeCategory(recipe.stats.refCategory);
    });
  }

  getInlineTagNames(tags: Tag[]) {
    return tags.map(tag => tag.name).join(', ');
  }
}
