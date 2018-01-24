import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {RecipeDetail} from '../../../layout/recipe/recipe.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecipeFetcherService {

  constructor(private afs: AngularFirestore) {
  }

  getRecipes() {
    const collection: AngularFirestoreCollection<RecipeDetail> = this.afs.collection('recipes');

    return collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as RecipeDetail;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getRecipe(id: string) {
    const document: AngularFirestoreDocument<RecipeDetail> = this.afs.doc('recipes/' + id);
    const document$: Observable<RecipeDetail> = document.valueChanges();
    return document$;
  }
}
