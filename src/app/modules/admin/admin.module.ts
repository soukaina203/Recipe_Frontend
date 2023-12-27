import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from '../landingPage/main/main.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatModule } from 'src/mat.module';



@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    MatModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,

  ]
})
export class AdminModule { }
