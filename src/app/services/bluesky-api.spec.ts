import { TestBed } from '@angular/core/testing';

import { BlueskyApi } from './bluesky-api';

describe('BlueskyApi', () => {
  let service: BlueskyApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueskyApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
