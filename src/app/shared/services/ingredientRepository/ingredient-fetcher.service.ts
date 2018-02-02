import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Ingredient} from '../../../layout/recipe/recipe.component';

@Injectable()
export class IngredientFetcherService {

  constructor(private afs: AngularFirestore) {
  }

  getAllIngredients() {
    const collection: AngularFirestoreCollection<Ingredient> = this.afs.collection('ingredients');
    return collection.valueChanges();
    // return collection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     console.log('ingredient data=' + data);
    //     console.log('ingredient id=' + id);
    //     return {id, ...data};
    //   });
    // });
  }
}
