import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filedata } from 'src/app/order/order-model';
import { DragDropListPresenterService } from '../dragdrop-list-presenter/drag-drop-list-presenter.service';

@Component({
  selector: 'app-drag-droplist-presenteation',
  templateUrl: './drag-droplist-presenteation.component.html',
  styleUrls: ['./drag-droplist-presenteation.component.scss']
})
export class DragDroplistPresenteationComponent implements OnInit {

  @Input() public set fileList(file : filedata[] | null){
    if(file){
      this._fileList = file;
    }
  }

  public get fileList(): filedata[]{
    return this._fileList;
  }
  @Output() public delete: EventEmitter<number>;

  private _fileList! : filedata[]
  constructor(private fileListService : DragDropListPresenterService,private router:Router) { 
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.fileListService.delete$.subscribe((res: number) => {
      this.delete.emit(res);
      alert('data deleted');
    });
  }
// Show file content
public showFile(content : string, type : string){
  this.fileListService.viewFile(content, type);
}
// delete call
onDelete(id: number) {
  this.fileListService.onDelete(id);
}
}
