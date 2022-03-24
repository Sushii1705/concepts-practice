import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { mentors } from '../../mentors-model';

@Injectable()
export class MentorsFormPresenterService {
private subject: Subject<mentors>;
public subjectData$:Observable<mentors>;
  constructor(private fb:FormBuilder) {
    this.subject = new Subject<mentors>();
    this.subject.asObservable();
    this.subjectData$ = this.subject.asObservable();
   }
  buildform(){
    return this.fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      
      email: ['', Validators.required],
      password: ['', Validators.required ],
      age:['', Validators.required],
      city:['', Validators.required],
      
    })
  }
  submitData(data:mentors){
    this.subject.next(data);
  }
}
