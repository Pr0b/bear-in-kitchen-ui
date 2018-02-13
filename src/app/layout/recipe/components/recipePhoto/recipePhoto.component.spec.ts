import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipePhotoComponent} from './recipePhoto.component';

describe('RecipePhotoComponent', () => {
  let component: RecipePhotoComponent;
  let fixture: ComponentFixture<RecipePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipePhotoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
