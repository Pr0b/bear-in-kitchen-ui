import {Component, Input, OnInit} from '@angular/core';

import {RecipeDetail} from '../../recipe.component';
import {StaticNumberIconMappingService} from '../../../../shared/services';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {

  @Input() recipe: RecipeDetail;

  constructor(private staticNumberIconMappingService: StaticNumberIconMappingService) {
  }

  ngOnInit() {
  }

  mapNumberToIcon(id: number) {
    return this.staticNumberIconMappingService.getIcon(id);
  }

}
