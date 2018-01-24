import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RecipeFetcherService} from '../../shared/services';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: Observable<RecipeDetail>;

  constructor(private recipeFetcherService: RecipeFetcherService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipe = this.recipeFetcherService.getRecipe(String(this.route.snapshot.params['id']));
  }

}

export interface Ingredient {
  'id': number;
  'title': string;
  'quantity': number;
  'unit': string;
}

export interface Stats {
  'serves': string;
  'time': string;
  'difficulty': string;
  'category': string;
}

export interface ProtocolItem {
  'order': number;
  'item': string;
  'tip': boolean;
}

export interface TagItem {
  'item': string;
}

export interface RecipeDetail {
  'id': string;
  'title': string;
  'description': string;
  'url': string;
  'thumbnailUrl': string;
  'photo': string;
  'thumbnail': string;
  'stats': Stats;
  'ingredients': Ingredient[];
  'protocol': ProtocolItem[];
  'tags': TagItem[];
}
