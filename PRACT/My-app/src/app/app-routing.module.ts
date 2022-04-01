import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'mvp', loadChildren: () => import('./mvp/mvp.module').then(m => m.MvpModule) }, { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) }, { path: 'share', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
