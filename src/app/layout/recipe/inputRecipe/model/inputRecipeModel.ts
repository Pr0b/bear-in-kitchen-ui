import {
  DynamicFormControlModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicFormGroupModel,
  DynamicFormArrayModel
} from '@ng-dynamic-forms/core';

export const INPUT_RECIPE_MODEL: DynamicFormControlModel[] = [
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

    id: 'labelsFormArray',
    initialCount: 1,
    groupFactory: () => {
      return [
        new DynamicInputModel({
          id: 'label',
          label: 'Label'
        })
      ];
    }
  }),

  new DynamicFormArrayModel({

    id: 'ingredientsFormArray',
    initialCount: 1,
    groupFactory: () => {
      return [
        new DynamicInputModel({
          id: 'ingredient',
          label: 'Ingredient'
        })
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
        })
      ];
    }
  })
];
