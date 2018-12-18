import {Component, Input, OnInit} from '@angular/core';
import {RecipeDetail} from '../../recipe.component';
import {Observable} from 'rxjs';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF, faGooglePlusG, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faPrint} from '@fortawesome/free-solid-svg-icons';

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
    library.add(faFacebookF, faWhatsapp, faTwitter, faGooglePlusG, faPrint);
  }

}
