import {Component, Input, OnInit} from '@angular/core';

import {RecipeDetail} from '../../recipe.component';
import {StaticNumberIconMappingService} from '../../../../shared/services';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {
  @Input() recipe: Observable<RecipeDetail>;

  constructor(private staticNumberIconMappingService: StaticNumberIconMappingService) {
  }

  ngOnInit() {
  }

  mapNumberToIcon(id: number) {
    return this.staticNumberIconMappingService.getIcon(id);
  }

}
