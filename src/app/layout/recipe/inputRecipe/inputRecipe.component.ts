import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormArray, FormGroup} from '@angular/forms';
import {AngularFireStorage} from 'angularfire2/storage';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {INPUT_RECIPE_MODEL} from './model/inputRecipeModel';
import {Observable} from 'rxjs/Observable';

import {RecipeDetail} from '../recipe.component';
import {Stats} from '../recipe.component';

@Component({
  selector: 'app-input-recipe',
  templateUrl: './inputRecipe.component.html',
  styleUrls: ['./inputRecipe.component.scss'],
  animations: [routerTransition()]
})
export class InputRecipeComponent implements OnInit {
  formModel: DynamicFormControlModel[] = INPUT_RECIPE_MODEL;
  formGroup: FormGroup;

  labelsFormArrayControl: FormArray;
  ingredientsFormArrayControl: FormArray;
  directionsFormArrayControl: FormArray;
  labelsFormArrayModel: DynamicFormArrayModel;
  ingredientsFormArrayModel: DynamicFormArrayModel;
  directionsFormArrayModel: DynamicFormArrayModel;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  metaThumb: Observable<any>;

  private newRecipe = <RecipeDetail> {
    stats: <Stats>{}
  };

  private recipesCollection: AngularFirestoreCollection<RecipeDetail>;
  recipes: Observable<RecipeDetail[]>;

  constructor(private formService: DynamicFormService,
              private storage: AngularFireStorage,
              private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.labelsFormArrayControl = this.formGroup.get('labelsFormArray') as FormArray;
    this.ingredientsFormArrayControl = this.formGroup.get('ingredientsFormArray') as FormArray;
    this.directionsFormArrayControl = this.formGroup.get('directionsFormArray') as FormArray;
    this.labelsFormArrayModel = this.formService.findById('labelsFormArray', this.formModel) as DynamicFormArrayModel;
    this.ingredientsFormArrayModel = this.formService.findById('ingredientsFormArray', this.formModel) as DynamicFormArrayModel;
    this.directionsFormArrayModel = this.formService.findById('directionsFormArray', this.formModel) as DynamicFormArrayModel;

    this.recipesCollection = this.afs.collection<RecipeDetail>('recipes');
    this.recipes = this.recipesCollection.valueChanges();
  }

  addRecipe(recipeDetail: RecipeDetail) {
    this.recipesCollection.add(recipeDetail);
  }

  onSubmit() {

    // uploadFile(this.formGroup.)
    //load photo to cloud storage
    //get url of stored photo
    //add photo url it onto recipe model
    //opt - save thumnail to cloud storage
    //opt - add it onto recipe model
    //opt - with cloud funtion create thumnail
    //opt add thumnail url onto recipe model
    //push recipe model into cloud db
    console.log(this.formGroup.value);
    this.newRecipe.title = this.formGroup.get(['basic', 'title']).value;
    this.newRecipe.description = this.formGroup.get(['basic', 'description']).value;
    this.newRecipe.stats.category = this.formGroup.get(['categories', 'category']).value;
    this.newRecipe.stats.difficulty = this.formGroup.get(['categories', 'difficulty']).value;
    this.newRecipe.stats.serves = this.formGroup.get(['categories', 'serves']).value;
    this.newRecipe.stats.time = this.formGroup.get(['categories', 'time']).value;

    this.addRecipe(this.newRecipe);
  }

  addItemLabels() {
    this.formService.addFormArrayGroup(this.labelsFormArrayControl, this.labelsFormArrayModel);
  }

  clearLabels() {
    this.formService.clearFormArray(this.labelsFormArrayControl, this.labelsFormArrayModel);
  }

  removeItemLabels(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.labelsFormArrayControl, context);
  }

  insertItemLabels(context: DynamicFormArrayModel, index: number) {
    this.formService.insertFormArrayGroup(index, this.labelsFormArrayControl, context);
  }

  addItemIngredients() {
    this.formService.addFormArrayGroup(this.ingredientsFormArrayControl, this.ingredientsFormArrayModel);
  }

  clearIngredients() {
    this.formService.clearFormArray(this.ingredientsFormArrayControl, this.ingredientsFormArrayModel);
  }

  removeItemIngredients(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.ingredientsFormArrayControl, context);
  }

  insertItemIngredients(context: DynamicFormArrayModel, index: number) {
    this.formService.insertFormArrayGroup(index, this.ingredientsFormArrayControl, context);
  }

  addItemDirections() {
    this.formService.addFormArrayGroup(this.directionsFormArrayControl, this.directionsFormArrayModel);
  }

  clearDirections() {
    this.formService.clearFormArray(this.directionsFormArrayControl, this.directionsFormArrayModel);
  }

  removeItemDirections(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.directionsFormArrayControl, context);
  }

  insertItemDirections(context: DynamicFormArrayModel, index: number) {
    this.formService.insertFormArrayGroup(index, this.directionsFormArrayControl, context);
  }

  uploadFile(event) {
    const file = event.target.files[0] as File;
    const filePath = 'recipes/' + file.name;
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();

    task.then((taskDone) => {
      this.newRecipe.photoUrl = taskDone.downloadURL;
      this.newRecipe.thumbnailUrl = taskDone.downloadURL;
    });
  }
}
