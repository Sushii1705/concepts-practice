import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { MentorsFormContainerComponent } from './mentors-form-container/mentors-form-container.component';
import { MentorsListContainerComponent } from './mentors-list-container/mentors-list-container.component';
import { MvpComponent } from './mvp.component';

const routes: Routes = [{ path: '', component: MvpComponent,
children:[
  {path:'list',component:MentorsListContainerComponent},
  {path :'', redirectTo:'list', pathMatch:'full'},
  {path:'add', component:MentorsFormContainerComponent},
  {
    path: 'edit/:id',
    component: MentorsFormContainerComponent
  }
  
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
