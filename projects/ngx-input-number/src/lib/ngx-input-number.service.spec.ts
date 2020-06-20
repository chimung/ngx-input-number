import { TestBed } from '@angular/core/testing';

import { NgxInputNumberService } from './ngx-input-number.service';

describe('NgxInputNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxInputNumberService = TestBed.get(NgxInputNumberService);
    expect(service).toBeTruthy();
  });
});
