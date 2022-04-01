import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filterdata, mentors } from 'src/app/mvp/mentors-model';

@Injectable()
export class FilterPresenterService {
  public filterForm:FormGroup;
  public filterdata$:Observable<filterdata>;
 
  public filterdata:Subject<filterdata>
  constructor(private fb:FormBuilder) { 
    this.filterdata = new Subject<filterdata>();
    this.filterdata$ = this.filterdata.asObservable();
    this.filterForm =  this.buildform();
  }
  buildform(){
    return this.fb.group({
      age:['', Validators.required],
      city:['', Validators.required],
      
    })
  }

  onsub(data:filterdata){    
     this.filterdata.next(data);
  }
}
