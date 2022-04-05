import { TestBed } from '@angular/core/testing';

import { DragDropListPresenterService } from './drag-drop-list-presenter.service';

describe('DragDropListPresenterService', () => {
  let service: DragDropListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragDropListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
