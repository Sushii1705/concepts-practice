import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filedata } from 'src/app/order/order-model';
import { DragDropPresenterService } from '../drag-drop-presenter/drag-drop-presenter.service';

@Component({
  selector: 'app-drag-upload-presentation',
  templateUrl: './drag-upload-presentation.component.html',
  styleUrls: ['./drag-upload-presentation.component.scss'],
  viewProviders : [DragDropPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DragUploadPresentationComponent implements OnInit {
  @Output() filesList:EventEmitter<any> = new EventEmitter<any>();

  @Output() fileUpload : EventEmitter<filedata>;
  //files array
  public file : File;
  constructor( private fs:DragDropPresenterService,private cdr:ChangeDetectorRef,private route:Router) { 
    this.fileUpload = new EventEmitter();
    this.file = {} as File;
  } 

  ngOnInit(): void {
    this.fs.files$.subscribe(res=>{
      console.log(res);
      this.filesList.emit(res);
      this.cdr.markForCheck();
      this.file = res;
    this.saveFile();

    });

    this.fs.fileRead$.subscribe((res) =>{
      this.fileUpload.emit(res)
    })
  }
  // dropfile(file:any){
  //   this.file = file.files;
  //   console.log(this.file)
  // }

  addFiles(file:any){
    this.file = file.files[0];
    console.log(this.file)
  }
  
  uploadFile(){ 
    this.fs.getdropFiles(this.file);
    // this.cdr.markForCheck();
    // this.route.navigateByUrl("order/list");

  }

  public saveFile(){
    this.fs.fileRead$.subscribe((res: filedata) => {
      this.fileUpload.emit(res);
    })
  }

}
