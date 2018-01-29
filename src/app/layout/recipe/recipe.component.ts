import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RecipeFetcherService} from '../../shared/services';
import {Observable} from 'rxjs/Observable';
import {AngularFirestoreDocument} from 'angularfire2/firestore/document/document';

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
    this.recipeFetcherService.getItems(String(this.route.snapshot.params['id']));

    this.recipe.subscribe(item => {
      console.log(item);
    });
  }

}

export interface Category {
  'id': string;
  'icon': string;
  'name': string;
}

export interface IngredientRecipe {
  'id': string;
  'title': string;
  'quantity': number;
  'unit': string;
  'ref': string;
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
  'id': string;
  'name': string;
  'ref': string;
}

export interface Item {
  'id': string;
  'item': string;
}

export interface RecipeDetail {
  'id': string;
  'title': string;
  'description': string;
  'thumbnailUrl': string;
  'photoUrl': string;
  'stats': Stats;
  'ingredients': IngredientRecipe[];
  'protocol': ProtocolItem[];
  'tags': TagItem[];
  'items': Item[];
}
