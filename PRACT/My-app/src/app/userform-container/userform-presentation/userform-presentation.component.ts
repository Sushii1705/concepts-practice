/**
 * @author Sushil Hariakar
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform-presentation',
  templateUrl: './userform-presentation.component.html',
  styleUrls: ['./userform-presentation.component.scss']
})
export class UserformPresentationComponent implements OnInit {
  public isfirstForm: boolean = true
  public isSecondForm: boolean = false
  public isThirdForm: boolean = false
  public firstUserForm: FormGroup;
  public secondUserForm: FormGroup;
  public thirdUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.firstUserForm = this.firstformbuild();
    this.secondUserForm = this.secondformbuild();
    this.thirdUserForm = this.thirdformbuild();
  }

   firstformbuild() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  secondformbuild() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  thirdformbuild() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {

  }

  /**
   * @name onNext
   * @description check the form is valid if yes then next form
   */
  onNext() {
    if (this.firstUserForm.valid) {
      console.log(this.firstUserForm.value)
      this.isfirstForm = false;
      console.log(`isSecondFOrm:${this.isSecondForm}`)
      this.isSecondForm = true;

    }
    if (this.secondUserForm.valid) {
      this.isThirdForm = true;
    }
    if (this.thirdUserForm.valid) {
      console.log(this.thirdUserForm.value)
    }
  }
  /**
   * @name onPrevious
   * @description to go to the previos submitted form
   */
  public onPrevious(){
    if(this.isSecondForm){
      this.isSecondForm = !this.secondUserForm;
      this.isSecondForm = false;
      this.isfirstForm = true;
      this.secondUserForm.reset();
    }
    if(this.isThirdForm){
      this.isThirdForm = !this.thirdUserForm;
      this.isThirdForm = false;
      this.isSecondForm = true;
      this.thirdUserForm.reset();
    }
    

}
}