import { TestBed } from '@angular/core/testing';

import { AuthProjectEventsService } from './auth-project-events.service';

describe('AuthProjectEventsService', () => {
  let service: AuthProjectEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthProjectEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
