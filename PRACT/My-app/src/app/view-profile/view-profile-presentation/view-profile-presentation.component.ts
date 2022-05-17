import { Component, Input, OnInit } from '@angular/core';
import { profileData } from 'src/app/shared/models/model';

@Component({
  selector: 'app-view-profile-presentation',
  templateUrl: './view-profile-presentation.component.html',
  styleUrls: ['./view-profile-presentation.component.scss']
})
export class ViewProfilePresentationComponent implements OnInit {
  private _profileData!:profileData[];

@Input() public set profileData(value : profileData[] | null){
   
  if(value) { 

    if(!this._profileData){
      this._profileData = value;
    }
    this._profileData = value;
  }
}
public get profileData():profileData[] | null{
  return this._profileData;
}
  constructor() { 
  }

  ngOnInit(): void {
  }

}
