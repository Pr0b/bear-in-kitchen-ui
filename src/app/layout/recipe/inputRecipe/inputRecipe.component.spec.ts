import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputRecipeComponent} from './inputRecipe.component';

describe('InputRecipeComponent', () => {
  let component: InputRecipeComponent;
  let fixture: ComponentFixture<InputRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputRecipeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
