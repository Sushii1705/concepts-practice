import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListPresentationComponent } from './order-list-presentation.component';

describe('OrderListPresentationComponent', () => {
  let component: OrderListPresentationComponent;
  let fixture: ComponentFixture<OrderListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
