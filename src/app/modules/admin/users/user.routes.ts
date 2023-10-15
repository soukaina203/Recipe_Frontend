import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
export default [
  {path:'',pathMatch:'full',redirectTo:''},

  {
    path:'',
    component:ListComponent,
    title:'users list'
  },
  {
    path:':id',
    component:UpdateComponent,
    title:'users edit'
  },


]as Routes;
