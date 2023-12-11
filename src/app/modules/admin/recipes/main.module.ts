import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    UpdateRecipeComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MainRoutingModule,
    MatStepperModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,

    MatButtonModule,
  ],
})
export class MainModule {}
