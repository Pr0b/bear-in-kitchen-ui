import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {IngredientRecipe, ProtocolItem, RecipeDetail, TagRecipe} from '../../../layout/recipe/recipe.component';
import {Observable} from 'rxjs/Observable';
import {DocumentSnapshot, Query} from '@firebase/firestore-types';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class RecipeFetcherService {
  lastRecipe: DocumentSnapshot;
  // Observable data
  data: Observable<any>;
  private _done = new BehaviorSubject(false);
  done: Observable<boolean> = this._done.asObservable();
  private _loading = new BehaviorSubject(false);
  loading: Observable<boolean> = this._loading.asObservable();
  private _data = new BehaviorSubject([]);
  private query: QueryConfig;

  constructor(private afs: AngularFirestore) {
    this.lastRecipe = null;
  }

  init() {
    this.query = {
      path: 'recipes',
      field: 'created',
      limit: 9,
      reverse: false,
      prepend: false,
    };

    const first = this.afs.collection(this.query.path, ref => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.limit);
    });

    this.mapAndUpdate(first);

    // Create the observable array for consumption in components
    this.data = this._data.asObservable()
      .scan((acc, val) => {
        return this.query.prepend ? val.concat(acc) : acc.concat(val);
      });
  }

  more() {
    const cursor = this.getCursor();

    const more = this.afs.collection(this.query.path, ref => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.limit)
        .startAfter(cursor);
    });
    this.mapAndUpdate(more);
  }

  private getCursor() {
    const current = this._data.value;
    if (current.length) {
      return this.query.prepend ? current[0].doc : current[current.length - 1].doc;
    }
    return null;
  }


  // Maps the snapshot to usable format the updates source
  private mapAndUpdate(col: AngularFirestoreCollection<any>) {

    if (this._done.value || this._loading.value) {
      return;
    }

    // loading
    this._loading.next(true);

    // Map snapshot with doc ref (needed for cursor)
    return col.snapshotChanges()
      .do(arr => {
        let values = arr.map(snap => {
          const data = snap.payload.doc.data();
          const doc = snap.payload.doc;
          const id = snap.payload.doc.id;
          return {id, ...data, doc};
        });

        // If prepending, reverse the batch order
        values = this.query.prepend ? values.reverse() : values;

        // update source with new values, done loading
        this._data.next(values);
        this._loading.next(false);

        // no more values, mark done
        if (!values.length) {
          this._done.next(true);
        }
      })
      .take(1)
      .subscribe();
  }


  // getPagenatedRecipes(startAfter: RecipeDetail) {
  getPagenatedRecipes() {
    const collection: AngularFirestoreCollection<RecipeDetail> = this.afs.collection('recipes');
    let firebaseQuery: Query = collection.ref.orderBy('title');

    if (this.lastRecipe != null) {
      firebaseQuery = firebaseQuery.startAfter(this.lastRecipe);
    }

    return firebaseQuery.limit(3).get().then(qsnap => {
      this.lastRecipe = qsnap.docs[qsnap.docs.length - 1];
      return qsnap.docs.map(qdocsnap => {
        const data = qdocsnap.data() as RecipeDetail;
        const id = qdocsnap.id;
        return {id, ...data};
      });
    });
  }

  getRecipes() {
    const collection: AngularFirestoreCollection<RecipeDetail> = this.afs.collection('recipes');
    // TODO rewrite to reference only
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
      this.getTags(idIn).then(res => {
        res.forEach(item => {
          tags.push({id: item.id, ...item.data()});
        });
      });

      this.getIngredients(idIn).then(res => {
        res.forEach(item => {
          ingredients.push({id: item.id, ...item.data()});
        });
      });

      this.getProtocols(idIn).then(res => {
        res.forEach(item => {
          protocols.push({id: item.id, ...item.data()});
        });
      });

      return {id, ...data, tags: tags, ingredients: ingredients, protocols: protocols};
    });
    return document$;
  }

  getTags(idItem: string) {
    const collection: AngularFirestoreCollection<TagRecipe> = this.afs.collection('recipes/' + idItem + '/tags');
    return collection.ref.get().then(qsnap => {
      return qsnap.docs;
    });
  }

  getIngredients(idItem: string) {
    const collection: AngularFirestoreCollection<IngredientRecipe> = this.afs.collection('recipes/' + idItem + '/ingredients');
    return collection.ref.get().then(qsnap => {
      return qsnap.docs;
    });
  }

  getProtocols(idItem: string) {
    const collection: AngularFirestoreCollection<ProtocolItem> = this.afs.collection('recipes/' + idItem + '/protocols');
    return collection.ref.orderBy('order').get().then(qsnap => {
      return qsnap.docs;
    });
  }
}

interface QueryConfig {
  path: string; //  path to collection
  field: string; // field to orderBy
  limit: number; // limit per query
  reverse: boolean; // reverse order?
  prepend: boolean; // prepend to source?
}
