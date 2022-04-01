import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filterdata } from 'src/app/order/order-model';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  filterForm: FormGroup ;
  @Output() closeFilter: EventEmitter<any>;
  @Output() filterData: EventEmitter<filterdata>;
  constructor(private fb: FormBuilder) {
    this.closeFilter = new EventEmitter<any>();
    this.filterData = new EventEmitter<filterdata>();
    this.filterForm = this.buildform();
  
  }
  ngOnInit(): void {
  }
  buildform(){
    return this.fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      
      email: ['', Validators.required],
      // password: ['', Validators.required ],
      catagory:['', Validators.required],
      size:['', Validators.required],
      
    })
  }
  cancelFilter() {
    this.closeFilter.emit();
  }
  applyFilter() {
    //  console.log(this.filterForm.value);
    this.filterData.emit(this.filterForm.value);
  }
}
