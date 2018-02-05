import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Ingredient} from '../../../layout/recipe/recipe.component';

@Injectable()
export class CategoryFetcherService {

  constructor(private afs: AngularFirestore) {
  }

  getAllIngredients() {
    const collection: AngularFirestoreCollection<Ingredient> = this.afs.collection('ingredients');
    return collection.ref;
  }

  getAllIngredientsWithChanges() {
    const collection: AngularFirestoreCollection<Ingredient> = this.afs.collection('ingredients');
    return collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, name: data.name};
      });
    });
  }
}
