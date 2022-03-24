import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mentors } from '../mentors-model';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-mentors-list-container',
  templateUrl: './mentors-list-container.component.html',
  styleUrls: ['./mentors-list-container.component.scss']
})
export class MentorsListContainerComponent implements OnInit {

  


  public mentorList$: Observable<mentors[]>;
  
  constructor(private service:MentorsService) { 
    this.mentorList$ = new Observable();

  }
  
  ngOnInit(): void {
    this.mentorList$ = this.service.getdata();
  }
  delete(id: number) {
   
    this.service.deletementor(id).subscribe((res: mentors) => {
      console.log(res);
      this.mentorList$ = this.service.getdata();
    });
  }
}
