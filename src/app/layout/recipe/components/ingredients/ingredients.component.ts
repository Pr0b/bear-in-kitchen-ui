import {Component, Input, OnInit} from '@angular/core';

import {RecipeDetail} from '../../recipe.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  @Input() recipe: RecipeDetail;

  constructor() {
  }

  ngOnInit() {
  }

}
