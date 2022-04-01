import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filterdata } from 'src/app/mvp/mentors-model';
import { FilterPresenterService } from '../filter-presenter/filter-presenter.service';

@Component({
  selector: 'app-filter-presentation',
  templateUrl: './filter-presentation.component.html',
  styleUrls: ['./filter-presentation.component.scss'],
  providers:[FilterPresenterService]
})
export class FilterPresentationComponent implements OnInit {
  @Output() close: EventEmitter<Event>;
  @Output() filterdata: EventEmitter<filterdata>
  public filterForm:FormGroup;
  

  constructor(private service:FilterPresenterService) {
    this.close = new EventEmitter<Event>();
    this.filterdata = new EventEmitter();
    this.filterForm = this.service.buildform();
  }
  
  ngOnInit(): void {
    this.filterForm = this.service.buildform();
    this.service.filterdata.subscribe(res=>{
      this.filterdata.emit(res);
      console.log(res,"shusil was here ")
    });
  }
  onClose(){
    this.close.emit();
  }
  onSubmit(){
    this.service.onsub(this.filterForm.value);
  }
}
