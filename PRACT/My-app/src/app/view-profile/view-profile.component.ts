import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { profileData } from '../shared/models/model';
import { ViewprofileService } from './viewprofile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
public profiledata$: Observable<profileData[]>;

  constructor(private service: ViewprofileService) { 
    this.profiledata$ = new Observable();
  }

  ngOnInit(): void {
    this.profiledata$ = this.service.getUserData();

  }

}
