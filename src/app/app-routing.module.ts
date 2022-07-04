import { NgModule, ɵisListLikeIterable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAddComponent } from './dash-add/dash-add.component';
import { DashListComponent } from './dash-list/dash-list.component';
import { HomeComponent } from './home/home.component';
import { CanActivateGuard } from './service/can-activate.guard';

const routes: Routes = [
  {path:'',redirectTo:'client/login',pathMatch:'full'},
  {path:'list',redirectTo:'client/list',pathMatch:'full'},
  {path:'client/list',component:DashListComponent,canActivate:[CanActivateGuard]
},
  // {path:'',component:HomeComponent},
  {path:'add',component:DashAddComponent},
  {  
    path: 'client/login',  
    loadChildren: () => import('./authentication/authentication.module')  
    .then(m => m.AuthenticationModule)  
 },  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
