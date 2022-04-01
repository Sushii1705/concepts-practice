import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { orders } from '../../order-model';

@Injectable()
export class OrderFormPresenterService {
private subject: Subject<orders>;
public subjectData$:Observable<orders>;

  constructor(private fb:FormBuilder) {
    this.subject = new Subject<orders>();
    this.subject.asObservable();
    this.subjectData$ = this.subject.asObservable();

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
  submitData(data:orders){
    this.subject.next(data);
  }
}
