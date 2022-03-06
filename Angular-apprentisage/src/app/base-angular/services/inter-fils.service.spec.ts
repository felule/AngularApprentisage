import { TestBed } from '@angular/core/testing';

import { InterFilsService } from './inter-fils.service';

describe('InterFilsService', () => {
  let service: InterFilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterFilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
