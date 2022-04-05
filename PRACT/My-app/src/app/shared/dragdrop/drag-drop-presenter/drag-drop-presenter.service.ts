import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filedata } from 'src/app/order/order-model';

@Injectable({
  providedIn: 'root'
})
export class DragDropPresenterService {
  public fileData : filedata;
  private fileRead : Subject<filedata>;
  public fileRead$ : Observable<filedata>;


  private _files:Subject<any>;
  public files$:Observable<any>; 

  constructor() { 
    this.fileData = {} as filedata;
    this._files = new Subject<any>();
    this.files$ = this._files.asObservable();
    this.fileRead = new Subject();
    this.fileRead$ = new Observable();
    this.fileRead$ = this.fileRead.asObservable();
  }


  getdropFiles(file:File){
   
    // console.log(file.name);
    let size = Math.round(file.size/1024/1024);
    if(size <= 2 ){
      this.fileData.filename = file.name;
      this.fileData.size = file.size;
      this.fileData.type = file.type;
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = (event) =>{
        this.fileData.content = event.target?.result as string;
        // console.log(this.fileData.content)
        this.fileRead.next(this.fileData);
      }
    }
    else{
      alert("File size is larger tha 2mb")
    }
  
}
  
}
  
