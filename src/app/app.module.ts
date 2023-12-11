import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './modules/admin/users/create/create.component';
// import { UpdateComponent } from './modules/admin/users/update/update.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './modules/landingPage/header/header.component';
import { HomeComponent } from './modules/landingPage/home/home.component';
import { AboutComponent } from './modules/landingPage/about/about.component';
import { BehindComponent } from './modules/landingPage/behind/behind.component';
import { RankingComponent } from './modules/landingPage/ranking/ranking.component';
import { ContactComponent } from './modules/landingPage/contact/contact.component';
import { FooterComponent } from './modules/landingPage/footer/footer.component';
import { MainComponent } from './modules/landingPage/main/main.component';
import { ToolbarComponent } from './modules/admin/toolbar/toolbar.component';
import { ListComponent } from './modules/admin/recipes/list/list.component';
import { UpdateRecipeComponent } from './modules/admin/recipes/update-recipe/update-recipe.component';
import { DashbordComponent } from './modules/admin/dashbord/dashbord.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashbordComponent,

  ],

  providers: [],
  bootstrap: [AppComponent],
  exports:[ MatTableModule ]

})
export class AppModule { }
