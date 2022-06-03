import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformContainerComponent } from './userform-container/userform-container.component';
// import { AuthGuard } from './mvp/auth/auth.guard';

const routes: Routes = [{ path: 'mvp', loadChildren: () => import('./mvp/mvp.module').then(m => m.MvpModule) },
 { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)}, 
 { path: 'share', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
 { path: 'profile', loadChildren: () => import('./view-profile/view-profile.module').then(m => m.ViewProfileModule) },
{path:'userprofile' ,component:UserformContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
