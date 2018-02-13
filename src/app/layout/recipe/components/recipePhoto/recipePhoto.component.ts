import {Component, Input, OnInit} from '@angular/core';
import {RecipeDetail} from '../../recipe.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-photo',
  templateUrl: './recipePhoto.component.html',
  styleUrls: ['./recipePhoto.component.scss']
})
export class RecipePhotoComponent implements OnInit {
  @Input() recipe: Observable<RecipeDetail>;

  constructor() {
  }

  ngOnInit() {
  }

}
