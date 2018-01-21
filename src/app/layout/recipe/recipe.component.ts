import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeFetcherService } from '../../shared/services';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: RecipeDetail;
  constructor(private recipeFetcherService: RecipeFetcherService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeFetcherService.getRecipe(+this.route.snapshot.params['id']);
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
  'item': string;
}

export interface TagItem {
  'item': string;
}

export interface TipItem {
  'item': string;
}

export interface RecipeDetail {
  'id': number;
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
  'tips': TipItem[];
}
