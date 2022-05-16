import { Component, OnInit } from '@angular/core';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-bs-datepicker',
  templateUrl: './bs-datepicker.component.html',
  styleUrls: ['./bs-datepicker.component.scss']
})
export class BsDatepickerComponent implements OnInit {
  maxDate: Date;
  today:Date;
  constructor() { 
    this.today = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 180);
    console.log(this.maxDate)
    }
    addToconsole(){
      console.log(this.maxDate)
    }
  ngOnInit(): void {
  }
  isInvalidDate( event: any ){
    let test = event.target.value;
    
    if ( test == 'Invalid date' ){
      event.target.value = ''; // Change it here
    }}
}
