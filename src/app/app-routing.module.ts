import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LoginComponent } from './modules/auth/login/login.component';
// import { ListComponent } from './modules/admin/users/list/list.component';
import { MainComponent } from './modules/landingPage/main/main.component';
import { AdminComponent } from './modules/admin/admin.component';
import { DashbordComponent } from './modules/admin/dashbord/dashbord.component';

const routes: Routes = [

  {path:'',component:MainComponent},
  {path:'singUp',component:SignupComponent},
  {path:'login',component:LoginComponent},
{
  path:'admin',
  component:AdminComponent,
  children:[
    {path:'',pathMatch:'full',redirectTo:''},
    {path:'dashbord',component:DashbordComponent},

    {path:'users',loadChildren:()=> import('./modules/admin/users/user.routes')}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
