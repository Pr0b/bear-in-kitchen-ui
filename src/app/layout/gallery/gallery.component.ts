import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Observable} from 'rxjs';
import {RecipeDetail} from '../recipe/recipe.component';
import {RecipeFetcherService} from '../../shared/services';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {
  recipes: Observable<RecipeDetail[]>;

  constructor(private recipeFetcherService: RecipeFetcherService,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.recipes = this.recipeFetcherService.getRecipes();
  }

  resolveThumbPhotoUrl(recipe: RecipeDetail): Observable<string> {
    if (recipe.thumbnailUrl) {
      return Observable.of(recipe.thumbnailUrl);
    }

    const downloadURL = this.storage.ref(recipe.thumbnailStoragePath).getDownloadURL();
    downloadURL.subscribe(url => {
      recipe.thumbnailUrl = url;
    });

    return downloadURL;
  }
}
