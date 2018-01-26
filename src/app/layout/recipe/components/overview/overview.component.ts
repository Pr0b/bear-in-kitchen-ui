import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {RecipeDetail} from '../../recipe.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public href = '';
  @Input() recipe: Observable<RecipeDetail>;


  constructor(private router: Router) {
    this.href = this.router.url;
  }

  ngOnInit() {
  }

}
