import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-input-recipe',
  templateUrl: './inputRecipe.component.html',
  styleUrls: ['./inputRecipe.component.scss'],
  animations: [routerTransition()]
})
export class InputRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
