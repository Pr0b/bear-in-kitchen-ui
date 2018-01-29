import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {IngredientRecipe, ProtocolItem, RecipeDetail, TagRecipe} from '../../../layout/recipe/recipe.component';
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
      const tags = [];
      const ingredients = [];
      const protocols = [];
      const data = a.payload.data() as RecipeDetail;
      const id = a.payload.id;
      this.getTags(idIn).subscribe(res => {
        res.forEach(item => {
          tags.push(item);
        });
      });

      this.getIngredients(idIn).subscribe(res => {
        res.forEach(item => {
          ingredients.push(item);
        });
      });

      this.getProtocols(idIn).subscribe(res => {
        res.forEach(item => {
          protocols.push(item);
        });
      });

      return {id, ...data, tags: tags, ingredients: ingredients, protocols: protocols};
    });
    return document$;
  }

  getTags(idItem: string) {
    const collection: AngularFirestoreCollection<TagRecipe> = this.afs.collection('recipes/' + idItem + '/tags');
    return collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as TagRecipe;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }

  getIngredients(idItem: string) {
    const collection: AngularFirestoreCollection<IngredientRecipe> = this.afs.collection('recipes/' + idItem + '/ingredients');
    return collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IngredientRecipe;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }

  getProtocols(idItem: string) {
    const collection: AngularFirestoreCollection<ProtocolItem> = this.afs.collection('recipes/' + idItem + '/protocols');
    return collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ProtocolItem;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }
}
