import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mentors } from '../mentors-model';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-mentors-form-container',
  templateUrl: './mentors-form-container.component.html',
  styleUrls: ['./mentors-form-container.component.scss']
})
export class MentorsFormContainerComponent implements OnInit {
  public id!: string;
  public mentorData$: Observable<mentors>

  constructor(private service:MentorsService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { 
      this.mentorData$ = new Observable();
  console.log(this.activatedRoute)
  this.id = this.activatedRoute.snapshot.params['id'];
  console.log(this.id)

  if (this.id) {
    this.mentorData$ = this.service.getCustomerById(this.id);
  }

    }

  ngOnInit(): void {
  }
  postData(data:mentors){
    this.service.postdata(data).subscribe((res) => {
      alert('data add successfully');
      this.router.navigateByUrl('mvp/list');
    })
  }
  editdata(mentorForm: mentors) {
    this.service.editCustomer(mentorForm,this.id).subscribe(
      (res: any) => {
        alert('Edit success')
        this.router.navigateByUrl('mvp/list');
      }
    );
  }

  
}
