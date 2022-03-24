import { ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { mentors } from '../../mentors-model';
import { MentorsService } from '../../mentors.service';
import { MentorsFormPresenterService } from '../mentors-form-presenter/mentors-form-presenter.service';

@Component({
  selector: 'app-mentors-form-presentaion',
  templateUrl: './mentors-form-presentaion.component.html',
  styleUrls: ['./mentors-form-presentaion.component.scss'],
  viewProviders:[MentorsFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MentorsFormPresentaionComponent implements OnInit {
  @Input() public set mentorData(value: mentors | null) {
    // console.log(value);
    if (value) {
      console.log(value);
      // this.customerForm.controls['age'].disable();
      console.log(this.mentorForm);

      this.mentorForm.patchValue(value);
      this.formTitle = 'Edit Customer';
      this._mentorData = value;
    }
  }
  public get mentorData(): mentors | null {
    return this._mentorData;
  }
  private _mentorData!: mentors;
  public mentorForm:FormGroup;
  public formTitle: string;
 @Output() public add: EventEmitter<mentors>
 @Output() public edit: EventEmitter<mentors>;
  
 constructor(private service:MentorsFormPresenterService) { 
    this.mentorForm = this.service.buildform();
    this.add = new EventEmitter<mentors>();
    this.edit = new EventEmitter();
    this.formTitle = 'Add Customer';
  }

  ngOnInit(): void {
    this.service.subjectData$.subscribe((res) => {
      this.formTitle === 'Add Customer'
          ? this.add.emit(res)
          : this.edit.emit(res);
    })
  }
  onSubmit(){
    console.log(this.mentorForm.value);
  this.service.submitData(this.mentorForm.value);
  }

}
