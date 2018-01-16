import { Component, OnInit, Input } from '@angular/core';

import { RecipeDetail } from '../../gallery/gallery.component';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {
  
  @Input() recipe:RecipeDetail
  constructor() { }

  ngOnInit() {
  }

}
