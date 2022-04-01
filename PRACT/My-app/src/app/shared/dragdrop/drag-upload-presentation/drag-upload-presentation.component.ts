import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DragDropPresenterService } from '../drag-drop-presenter/drag-drop-presenter.service';

@Component({
  selector: 'app-drag-upload-presentation',
  templateUrl: './drag-upload-presentation.component.html',
  styleUrls: ['./drag-upload-presentation.component.scss']
})
export class DragUploadPresentationComponent implements OnInit {
  @Output() filesList:EventEmitter<any> = new EventEmitter<any>();


  //files array
  public files: any[] = [];
  constructor( private fs:DragDropPresenterService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fs.files$.subscribe(res=>{
      this.filesList.emit(res);
      this.cdr.markForCheck();
      this.files = res;
    });
  }

  onFileChange(file:any){
    this.fs.getFiles(file);
  }
  
  openConfirmDialog(index:number){
    alert(index);
  }
}
