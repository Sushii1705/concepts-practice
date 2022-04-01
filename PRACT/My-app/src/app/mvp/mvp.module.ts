import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay'

import { MvpRoutingModule } from './mvp-routing.module';
import { MvpComponent } from './mvp.component';
import { MentorsFormContainerComponent } from './mentors-form-container/mentors-form-container.component';
import { MentorsListContainerComponent } from './mentors-list-container/mentors-list-container.component';
import { MentorsFormPresentaionComponent } from './mentors-form-container/mentors-form-presentaion/mentors-form-presentaion.component';
import { MentorsListPresentationComponent } from './mentors-list-container/mentors-list-presentation/mentors-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentorsService } from './mentors.service';
import { FilterPresentationComponent } from './mentors-list-container/mentors-list-presentation/filter-presentation/filter-presentation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    MvpComponent,
    MentorsFormContainerComponent,
    MentorsListContainerComponent,
    MentorsFormPresentaionComponent,
    MentorsListPresentationComponent,
    FilterPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    FormsModule,
    DragDropModule
    
  ],
  providers:[MentorsService]
})
export class MvpModule { }
