import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ListComponent } from './modules/admin/users/list/list.component';

const routes: Routes = [
  {path:'singUp',loadComponent:()=>import('./modules/auth/signup/signup.component').then()},
  {path:'login',component:LoginComponent},
{
  path:'admin',
  children:[
    {path:'',pathMatch:'full',redirectTo:'user/list'},
    {path:'user',loadChildren:()=> import('./modules/admin/users/user.routes')}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
