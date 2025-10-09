import { TestBed } from '@angular/core/testing';

import { ApiKeyInterceptor } from './api-key.interceptor';

describe('ApiKeyInterceptor', () => {
  let service: ApiKeyInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKeyInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
