import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { OrderFormPresentationComponent } from './order-form-container/order-form-presentation/order-form-presentation.component';
import { OrderListPresentationComponent } from './order-list-container/order-list-presentation/order-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterFormComponent } from './order-list-container/order-list-presentation/filter-form/filter-form.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OrderComponent,
    OrderFormContainerComponent,
    OrderListContainerComponent,
    OrderFormPresentationComponent,
    OrderListPresentationComponent,
    FilterFormComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    OverlayModule,     
  ]
})
export class OrderModule { }
