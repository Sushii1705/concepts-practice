import { TestBed } from '@angular/core/testing';

import { OrderListPresenterService } from './order-list-presenter.service';

describe('OrderListPresenterService', () => {
  let service: OrderListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
