import { TestBed } from '@angular/core/testing';

import { VeveService } from './veve.service';

describe('VeveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeveService = TestBed.get(VeveService);
    expect(service).toBeTruthy();
  });
});
