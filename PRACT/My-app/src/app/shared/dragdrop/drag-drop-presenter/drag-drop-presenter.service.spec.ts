import { TestBed } from '@angular/core/testing';

import { DragDropPresenterService } from './drag-drop-presenter.service';

describe('DragDropPresenterService', () => {
  let service: DragDropPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragDropPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
