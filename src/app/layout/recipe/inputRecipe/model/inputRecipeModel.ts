import {
  DynamicCheckboxModel,
  DynamicFormArrayModel,
  DynamicFormControlModel,
  DynamicFormGroupModel,
  DynamicInputModel,
  DynamicSelectModel
} from '@ng-dynamic-forms/core';
import {Injectable} from '@angular/core';
import {FormatSelectOptionService} from '../service/formatSelectOption.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InputRecipeModel {
  constructor(private formatSelectOptionService: FormatSelectOptionService) {
  }

  INPUT_RECIPE_MODEL: DynamicFormControlModel[] = [
    new DynamicFormGroupModel({

      id: 'basic',
      legend: 'Basic',
      group: [
        new DynamicInputModel({

          id: 'title',
          label: 'title',
        }),
        new DynamicInputModel({

          id: 'description',
          label: 'Description'
        }),
      ]
    }),

    new DynamicFormGroupModel({

      id: 'categories',
      legend: 'Categories',
      group: [
        new DynamicInputModel({

          id: 'serves',
          label: 'Serves',
        }),
        new DynamicInputModel({

          id: 'time',
          label: 'Time'
        }),
        new DynamicInputModel({

          id: 'difficulty',
          label: 'Difficulty'
        }),
        new DynamicInputModel({

          id: 'category',
          label: 'Category'
        })
      ]
    }),

    new DynamicFormArrayModel({

      id: 'tagsFormArray',
      initialCount: 1,
      groupFactory: () => {
        return [
          new DynamicInputModel({
            id: 'tag',
            label: 'tag'
          })
        ];
      }
    }),

    new DynamicFormArrayModel({

      id: 'ingredientsFormArray',
      initialCount: 1,
      groupFactory: () => {
        // const newOptions = Observable.fromPromise(this.formatSelectOptionService.getIngredients());
        return [
          new DynamicInputModel({
            id: 'ingredient',
            label: 'Ingredient'
          }),
          new DynamicInputModel({
            id: 'unit',
            label: 'unit'
          }),
          new DynamicInputModel({
            id: 'quantity',
            label: 'quantity'
          }),
          new DynamicSelectModel<string>(
            {
              id: 'ingredientSelect',
              label: 'Ingredients',
              multiple: false,
              // options: newOptions,
              placeholder: 'Select an option'
            }
          )
        ];
      }
    }),

    new DynamicFormArrayModel({

      id: 'directionsFormArray',
      initialCount: 1,
      groupFactory: () => {
        return [
          new DynamicInputModel({
            id: 'direction',
            label: 'Direction'
          }),
          new DynamicCheckboxModel({
            id: 'tip',
            label: 'tip'
          })
        ];
      }
    })
  ];
}

export const NG_BOOTSTRAP_SAMPLE_FORM_LAYOUT = {
  'tagsFormArray': {
    element: {
      container: 'form-group form-array',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-6',
      label: 'col-sm-6'
    }
  },
  'ingredientsFormArray': {
    element: {
      container: 'form-group form-array',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-6',
      label: 'col-sm-6'
    }
  },
  'directionsFormArray': {
    element: {
      container: 'form-group form-array',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-6',
      label: 'col-sm-6'
    }
  }
};

