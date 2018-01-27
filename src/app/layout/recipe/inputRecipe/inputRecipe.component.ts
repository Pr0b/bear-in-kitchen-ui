import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {DynamicFormControlModel, DynamicFormService, DynamicFormArrayModel} from '@ng-dynamic-forms/core';
import {FormArray, FormGroup} from '@angular/forms';
import {INPUT_RECIPE_MODEL} from './model/inputRecipeModel';

@Component({
  selector: 'app-input-recipe',
  templateUrl: './inputRecipe.component.html',
  styleUrls: ['./inputRecipe.component.scss'],
  animations: [routerTransition()]
})
export class InputRecipeComponent implements OnInit {
  formModel: DynamicFormControlModel[] = INPUT_RECIPE_MODEL;
  formGroup: FormGroup;
  labelsFormArrayControl: FormArray
  ingredientsFormArrayControl: FormArray
  directionsFormArrayControl: FormArray;
  labelsFormArrayModel: DynamicFormArrayModel;
  ingredientsFormArrayModel: DynamicFormArrayModel;
  directionsFormArrayModel: DynamicFormArrayModel;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.labelsFormArrayControl = this.formGroup.get('labelsFormArray') as FormArray;
    this.ingredientsFormArrayControl = this.formGroup.get('ingredientsFormArray') as FormArray;
    this.directionsFormArrayControl = this.formGroup.get('directionsFormArray') as FormArray;
    this.labelsFormArrayModel = this.formService.findById('labelsFormArray', this.formModel) as DynamicFormArrayModel;
    this.ingredientsFormArrayModel = this.formService.findById('ingredientsFormArray', this.formModel) as DynamicFormArrayModel;
    this.directionsFormArrayModel = this.formService.findById('directionsFormArray', this.formModel) as DynamicFormArrayModel;
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
}
