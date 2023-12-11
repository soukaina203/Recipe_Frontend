import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
/*{imports}*/
// admin /
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: '', redirectTo: 'dash', pathMatch: 'full' }],
  },
  { path: 'recipe', loadChildren: () => import('./recipes/main.module').then(m => m.MainModule), },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
