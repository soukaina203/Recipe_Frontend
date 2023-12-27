import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UpdateComponent } from './users/update/update.component';
import { ListComponent } from './users/list/list.component';
/*{imports}*/
// admin /
const routes: Routes = [


  { path: '', component: AdminComponent,
  children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'users/:id', component: UpdateComponent },
    { path: 'users', component: ListComponent },
    { path: 'recipes',
     loadChildren: () => import('./recipes/main.module').then(m => m.MainModule)
  },

  ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
