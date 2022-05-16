import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragUploadPresentationComponent } from './dragdrop/drag-upload-presentation/drag-upload-presentation.component';
import { FileDragDirective } from './file-drag.directive';
import { DragDroplistPresenteationComponent } from './dragdrop/drag-droplist-presenteation/drag-droplist-presenteation.component';
import { BsDatepickerComponent } from './bs-datepicker/bs-datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    SharedComponent,
    PaginationComponent,
    DragdropComponent,
    DragUploadPresentationComponent,
    FileDragDirective,
    DragDroplistPresenteationComponent,
    BsDatepickerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BsDatepickerModule
  ],
  exports: [
    PaginationComponent,
    DragdropComponent,
    FileDragDirective,
    BsDatepickerComponent 
  ]
})
export class SharedModule { }
