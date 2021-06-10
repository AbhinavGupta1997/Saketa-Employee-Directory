import { TestBed } from '@angular/core/testing';

import { TopSecretService } from './top-secret.service';

describe('TopSecretService', () => {
  let service: TopSecretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopSecretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
