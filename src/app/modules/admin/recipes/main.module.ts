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
import { MatModule } from 'src/mat.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    UpdateRecipeComponent,
    MainComponent,
    HeaderComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule,
    MatModule,

    MatButtonModule,
  ],
})
export class MainModule {}
