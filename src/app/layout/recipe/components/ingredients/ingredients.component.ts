import { Component, OnInit, Input } from '@angular/core';

import { RecipeDetail } from '../../../gallery/gallery.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  @Input() recipe:RecipeDetail
  constructor() { }

  ngOnInit() {
  }

}
