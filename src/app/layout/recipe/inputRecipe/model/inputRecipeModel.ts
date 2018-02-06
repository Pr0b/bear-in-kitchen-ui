import {
  DynamicCheckboxModel,
  DynamicFormArrayModel,
  DynamicFormControlModel,
  DynamicFormGroupModel,
  DynamicInputModel,
  DynamicSelectModel, DynamicTextAreaModel
} from '@ng-dynamic-forms/core';


export const  INPUT_RECIPE_MODEL: DynamicFormControlModel[] = [
    new DynamicFormGroupModel({

      id: 'basic',
      legend: 'Basic',
      group: [
        new DynamicInputModel({

          id: 'title',
          label: 'title',
        }),
        new DynamicTextAreaModel({
          id: 'description',
          label: 'Description',
          placeholder: 'Description',
          rows: 5
        }),
      ]
    }),

    new DynamicFormGroupModel({

      id: 'categories',
      legend: 'Categories',
      group: [
        new DynamicInputModel({

          id: 'serves',
          inputType: 'number',
          label: 'Serves',
        }),
        new DynamicInputModel({

          id: 'time',
          inputType: 'number',
          label: 'Time'
        }),
        new DynamicInputModel({

          id: 'difficulty',
          label: 'Difficulty'
        }),
        new DynamicInputModel({

          id: 'category',
          label: 'Category'
        }),
        new DynamicSelectModel<string>(
          {
            id: 'recipeCategorySelect',
            label: 'Recipe Categories',
            multiple: false,
            placeholder: 'Select an option'
          }
        )
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
        return [
          new DynamicSelectModel<string>(
            {
              id: 'ingredientSelect',
              label: 'Ingredients',
              multiple: false,
              placeholder: 'Select an option'
            }
          ),
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
            inputType: 'number',
            label: 'quantity',
            placeholder: 'Quantity',
            hint: 'Hint',
            min: 1,
            value: 4
          })
        ];
      }
    }),

    new DynamicFormArrayModel({

      id: 'directionsFormArray',
      initialCount: 1,
      groupFactory: () => {
        return [
          new DynamicTextAreaModel({
            id: 'direction',
            label: 'Direction',
            placeholder: 'Direction description',
            rows: 5
          }),
          new DynamicCheckboxModel({
            id: 'tip',
            label: 'tip'
          })
        ];
      }
    })
  ];

export const NG_BOOTSTRAP_SAMPLE_FORM_LAYOUT = {
  'tagsFormArray': {
    element: {
      container: 'form-group form-array',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-9',
      label: 'col-sm-3'
    }
  },
  'ingredientsFormArray': {
    element: {
      container: 'form-group form-array',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-9',
      label: 'col-sm-3'
    }
  },

  'directionsFormArray': {
    element: {
      container: 'form-group form-array',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-9',
      label: 'col-sm-3'
    }
  },

  'basic': {
    element: {
      container: 'form-group',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-9',
      label: 'col-sm-3'
    }
  },

  'categories': {
    element: {
      container: 'form-group',
      label: 'control-label'
    },
    grid: {
      control: 'col-sm-9',
      label: 'col-sm-3'
    }
  }

  // 'tagsFormArray': {
  //   element: {
  //     container: 'form-group form-array',
  //     label: 'control-label'
  //   },
  //   grid: {
  //     control: 'col-sm-6',
  //     label: 'col-sm-6'
  //   }
  // },
  // 'ingredientsFormArray': {
  //   element: {
  //     container: 'form-group form-array',
  //     label: 'control-label'
  //   },
  //   grid: {
  //     control: 'col-sm-6',
  //     label: 'col-sm-6'
  //   }
  // },
  // 'directionsFormArray': {
  //   element: {
  //     container: 'form-group form-array',
  //     label: 'control-label'
  //   },
  //   grid: {
  //     control: 'col-sm-6',
  //     label: 'col-sm-6'
  //   }
};

