import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Item, RecipeDetail} from '../../../layout/recipe/recipe.component';
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
        return {id, ...data};
      });
    });
  }

  getRecipe(idIn: string) {
    const document: AngularFirestoreDocument<RecipeDetail> = this.afs.doc('recipes/' + idIn);
    const document$: Observable<RecipeDetail> = document.snapshotChanges().map(a => {
      const items = [];
      const data = a.payload.data() as RecipeDetail;
      const id = a.payload.id;
      this.getItems(idIn).subscribe(res => {
        res.forEach(item => {
          items.push(item);
        });
      });
      return {id, ...data, items: items};
    });
    return document$;
  }

  getItems(idItem: string) {
    const collection: AngularFirestoreCollection<Item> = this.afs.collection('recipes/' + idItem + '/items');
    return collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }
}
