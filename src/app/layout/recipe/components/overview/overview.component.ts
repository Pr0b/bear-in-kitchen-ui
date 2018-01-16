import { Component, OnInit, Input } from '@angular/core';

import { RecipeDetail } from '../../../gallery/gallery.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() recipe:RecipeDetail
  constructor() { }

  ngOnInit() {
  }

}
