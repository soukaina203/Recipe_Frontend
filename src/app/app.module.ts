import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './modules/admin/users/create/create.component';
import { UpdateComponent } from './modules/admin/users/update/update.component';
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
import { AdminComponent } from './modules/admin/admin.component';
import { ListComponent } from './modules/admin/recipes/list/list.component';
import { UpdateRecipeComponent } from './modules/admin/recipes/update-recipe/update-recipe.component';
import { DashbordComponent } from './modules/admin/dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CreateComponent,
    BehindComponent,
    HomeComponent,
    AboutComponent,
    RankingComponent,
    ContactComponent,
    FooterComponent,
    MainComponent,
    ToolbarComponent,
    AdminComponent,
    ListComponent,
    UpdateComponent,
    UpdateRecipeComponent,
    DashbordComponent
    // UpdateComponent,
    // DetailComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeaderComponent,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
