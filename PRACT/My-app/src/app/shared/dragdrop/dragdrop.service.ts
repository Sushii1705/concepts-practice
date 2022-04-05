import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filedata } from 'src/app/order/order-model';
import { environment } from 'src/environments/environment';


@Injectable()
export class DragdropService {
  public apiLink : string;
  constructor(private http : HttpClient) {
    this.apiLink = environment.baseURL;
   }
     // Upload File
  public addFile(file: filedata):Observable<filedata>{
    return this.http.post<filedata>(`${this.apiLink}/filedata`, file)
  }

  // Get File List
  public getFile(): Observable<filedata[]>{
    return this.http.get<filedata[]>(`${this.apiLink}/filedata`)
  }

  public deleteview(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/filedata/${id}`)
  }
}
