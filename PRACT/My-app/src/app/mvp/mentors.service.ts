import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mentors } from './mentors-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MentorsService {
  constructor(private http: HttpClient) {}
  // get data from form
  getdata(): Observable<mentors[]> {
    return this.http.get<mentors[]>(`http://localhost:3000/mentor`);
  }
  // send data to list
  postdata(data: mentors): Observable<mentors> {
    return this.http.post<mentors>(`http://localhost:3000/mentor`, data);
  }

  // get id from list
  public getCustomerById(id: string): Observable<mentors> {
    return this.http.get<mentors>(`http://localhost:3000/mentor/${id}`);
  }

  // update form
  editCustomer(data: mentors, id: string): Observable<mentors> {
    return this.http.put<mentors>(`http://localhost:3000/mentor/${id}`, data);
  }
  // delete 
  public deletementor(id: number): Observable<mentors> {
    return this.http.delete<mentors>(`http://localhost:3000/mentor/${id}`)
  }
}

