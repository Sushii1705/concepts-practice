import { TestBed } from '@angular/core/testing';

import { OrderFormPresenterService } from './order-form-presenter.service';

describe('OrderFormPresenterService', () => {
  let service: OrderFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
