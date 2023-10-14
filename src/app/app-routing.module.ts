import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ListComponent } from './modules/admin/users/list/list.component';

const routes: Routes = [
  {path:'singUp',component:SignupComponent},
  {path:'login',component:LoginComponent},
{
  path:'admin',
  children:[
    {path:'',pathMatch:'full',redirectTo:'blocTemplate'},
    {path:'user',loadChildren:()=> import('./modules/admin/users/user.routes').then()}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
