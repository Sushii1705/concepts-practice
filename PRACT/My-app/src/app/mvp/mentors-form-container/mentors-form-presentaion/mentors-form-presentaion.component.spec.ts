import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsFormPresentaionComponent } from './mentors-form-presentaion.component';

describe('MentorsFormPresentaionComponent', () => {
  let component: MentorsFormPresentaionComponent;
  let fixture: ComponentFixture<MentorsFormPresentaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsFormPresentaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsFormPresentaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
