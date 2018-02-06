import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Ingredient, RecipeCategory} from '../../../layout/recipe/recipe.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryFetcherService {

  constructor(private afs: AngularFirestore) {
  }

  getAllRecipeCategories() {
    const collection: AngularFirestoreCollection<Ingredient> = this.afs.collection('recipeCategories');
    return collection.ref;
  }

  getAllRecipeCategoriesWithChanges(): Observable<RecipeCategory[]> {
    const collection: AngularFirestoreCollection<Ingredient> = this.afs.collection('recipeCategories');
    return collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as RecipeCategory;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }
}
