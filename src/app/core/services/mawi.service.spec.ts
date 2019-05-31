import { TestBed } from '@angular/core/testing';

import { MawiService } from './mawi.service';

describe('MawiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MawiService = TestBed.get(MawiService);
    expect(service).toBeTruthy();
  });
});
