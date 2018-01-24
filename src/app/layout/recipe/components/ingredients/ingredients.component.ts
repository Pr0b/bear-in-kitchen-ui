import {Component, Input, OnInit} from '@angular/core';

import {RecipeDetail} from '../../recipe.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  @Input() recipe: Observable<RecipeDetail>;

  constructor() {
  }

  ngOnInit() {
  }

}
