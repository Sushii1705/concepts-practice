import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragUploadPresentationComponent } from './dragdrop/drag-upload-presentation/drag-upload-presentation.component';
import { FileDragDirective } from './file-drag.directive';
import { DragDroplistPresenteationComponent } from './dragdrop/drag-droplist-presenteation/drag-droplist-presenteation.component';


@NgModule({
  declarations: [
    SharedComponent,
    PaginationComponent,
    DragdropComponent,
    DragUploadPresentationComponent,
    FileDragDirective,
    DragDroplistPresenteationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PaginationComponent,
    DragdropComponent,
    FileDragDirective
  ]
})
export class SharedModule { }
