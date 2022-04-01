import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragUploadPresentationComponent } from './drag-upload-presentation.component';

describe('DragUploadPresentationComponent', () => {
  let component: DragUploadPresentationComponent;
  let fixture: ComponentFixture<DragUploadPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragUploadPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragUploadPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
