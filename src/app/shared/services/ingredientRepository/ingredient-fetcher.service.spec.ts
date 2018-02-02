import { TestBed, inject } from '@angular/core/testing';

import { IngredientFetcherService } from './ingredient-fetcher.service';

describe('IngredientFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientFetcherService]
    });
  });

  it('should be created', inject([IngredientFetcherService], (service: IngredientFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
