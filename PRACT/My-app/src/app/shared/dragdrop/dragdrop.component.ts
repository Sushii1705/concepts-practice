import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filedata } from 'src/app/order/order-model';
import { DragdropService } from './dragdrop.service';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss'],
  viewProviders:[DragdropService]
})
export class DragdropComponent implements OnInit {
  public fileList$ : Observable<filedata[]>
 
  constructor(private service : DragdropService) {
    this.fileList$ = new Observable();
    
   }

  ngOnInit(): void {
    this.getFile();
  }
  public saveFile(file: filedata){
    this.service.addFile(file).subscribe((res) => {
      console.log(res)
      this.getFile();
      
    })
  }
   // Get File List
   public getFile(){
    this.fileList$ = this.service.getFile()
  }
  delete(id: number) {
   
    this.service.deleteview(id).subscribe((res: number) => {
      console.log(res);
      this.getFile();
    });
  }
}
