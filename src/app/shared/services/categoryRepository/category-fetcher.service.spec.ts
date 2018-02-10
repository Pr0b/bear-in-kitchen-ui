import {inject, TestBed} from '@angular/core/testing';

import {CategoryFetcherService} from './category-fetcher.service';

describe('CategoryFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryFetcherService]
    });
  });

  it('should be created', inject([CategoryFetcherService], (service: CategoryFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
