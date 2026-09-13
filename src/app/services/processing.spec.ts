import { TestBed } from '@angular/core/testing';

import { Processing } from './processing';

describe('Processing', () => {
  let service: Processing;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Processing);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
