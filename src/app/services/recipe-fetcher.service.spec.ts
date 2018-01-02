import { TestBed, inject } from '@angular/core/testing';

import { RecipeFetcherService } from './recipe-fetcher.service';

describe('RecipeFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeFetcherService]
    });
  });

  it('should be created', inject([RecipeFetcherService], (service: RecipeFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
