import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDroplistPresenteationComponent } from './drag-droplist-presenteation.component';

describe('DragDroplistPresenteationComponent', () => {
  let component: DragDroplistPresenteationComponent;
  let fixture: ComponentFixture<DragDroplistPresenteationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDroplistPresenteationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDroplistPresenteationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
