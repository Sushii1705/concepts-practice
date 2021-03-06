import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { profileData } from '../shared/models/model';

@Injectable()
export class ViewprofileService {

  constructor(private http:HttpClient) { }
  getUserData():Observable<profileData[]>{
    return this.http.get<profileData[]>(`/doctor/{doctorMobileNumber}`)
  }
}
