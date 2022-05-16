import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfilePresentationComponent } from './view-profile-presentation.component';

describe('ViewProfilePresentationComponent', () => {
  let component: ViewProfilePresentationComponent;
  let fixture: ComponentFixture<ViewProfilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
