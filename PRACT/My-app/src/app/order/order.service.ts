import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orders, size } from './order-model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  // get data from form
  getdata(): Observable<orders[]> {
    return this.http.get<orders[]>(`http://localhost:3000/orders`);
  }
  // send data to list
  postdata(data: orders): Observable<orders> {
    return this.http.post<orders>(`http://localhost:3000/orders`, data);
  }
  getsizelist(): Observable<size[]> {
    return this.http.get<size[]>(`http://localhost:3000/orders`)
  }
  public deleteorder(id: number): Observable<orders> {
    return this.http.delete<orders>(`http://localhost:3000/orders/${id}`)
  }

  // get id from list
  public getorderById(id: string): Observable<orders> {
    return this.http.get<orders>(`http://localhost:3000/orders/${id}`);
  }

    // update form
    editorder(data: orders, id: string): Observable<orders> {
      return this.http.put<orders>(`http://localhost:3000/orders/${id}`, data);
    }
}
