import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { ViewProfileComponent } from './view-profile.component';
import { ViewProfilePresentationComponent } from './view-profile-presentation/view-profile-presentation.component';


@NgModule({
  declarations: [
    ViewProfileComponent,
    ViewProfilePresentationComponent
  ],
  imports: [
    CommonModule,
    ViewProfileRoutingModule
  ]
})
export class ViewProfileModule { }
