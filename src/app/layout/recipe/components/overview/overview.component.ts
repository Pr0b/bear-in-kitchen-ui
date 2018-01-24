import {Component, Input, OnInit} from '@angular/core';

import {RecipeDetail} from '../../recipe.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() recipe: Observable<RecipeDetail>;

  constructor() {
  }

  ngOnInit() {
  }

}
