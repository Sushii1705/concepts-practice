import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterPresenterService } from '../filter-presenter/filter-presenter.service';

@Component({
  selector: 'app-filter-presentation',
  templateUrl: './filter-presentation.component.html',
  styleUrls: ['./filter-presentation.component.scss'],
  providers:[FilterPresenterService]
})
export class FilterPresentationComponent implements OnInit {
  @Output() close: EventEmitter<Event>;
  public filterForm:FormGroup;
  

  constructor(private service:FilterPresenterService) {
    this.close = new EventEmitter<Event>();
    this.filterForm = this.service.buildform();
   }

  ngOnInit(): void {
  }

}
