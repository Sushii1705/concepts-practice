import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../shared/shared.module';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { OrderFormPresentationComponent } from './order-form-container/order-form-presentation/order-form-presentation.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { FilterFormComponent } from './order-list-container/order-list-presentation/filter-form/filter-form.component';
import { OrderListPresentationComponent } from './order-list-container/order-list-presentation/order-list-presentation.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';



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
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OverlayModule,     
    BsDatepickerModule,
 ]
})
export class OrderModule { }
