import { TestBed } from '@angular/core/testing';

import { ViewProfilePresenterService } from './view-profile-presenter.service';

describe('ViewProfilePresenterService', () => {
  let service: ViewProfilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewProfilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
