import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FilterPresenterService {

  constructor(private fb:FormBuilder) { }
  buildform(){
    return this.fb.group({
      age:['', Validators.required],
      city:['', Validators.required],
      
    })
  }
}
