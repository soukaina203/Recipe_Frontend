import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { CreateComponent } from './create/create.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { ListComponent } from './list/list.component';
/*{imports}*/

const routes: Routes = [
  { path: '', component: MainComponent,
  children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: ':id', component: UpdateRecipeComponent },

  ]
  }, // Optional, for redirecting to a specific child route

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
