import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { CreateComponent } from './create/create.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { ListComponent } from './list/list.component';
/*{imports}*/

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component:ListComponent },
  { path: 'create', component:CreateComponent },
  { path: ':id', component:UpdateRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
