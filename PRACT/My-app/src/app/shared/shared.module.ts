import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragUploadPresentationComponent } from './dragdrop/drag-upload-presentation/drag-upload-presentation.component';
import { FileDragDirective } from './file-drag.directive';


@NgModule({
  declarations: [
    SharedComponent,
    PaginationComponent,
    DragdropComponent,
    DragUploadPresentationComponent,
    FileDragDirective
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
