import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormContainerComponent} from './order-form-container/order-form-container.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { OrderComponent } from './order.component';

const routes: Routes = [{ path: '', component: OrderComponent ,
children:[
  {path:'list',component:OrderListContainerComponent},
  {path:'add',component:OrderFormContainerComponent},
  {
    path: 'edit/:id',
    component: OrderFormContainerComponent
  },

  {path:'',redirectTo:'list',pathMatch:'full'}
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
