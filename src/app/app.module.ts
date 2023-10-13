import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './modules/admin/users/list/list.component';
import { CreateComponent } from './modules/admin/users/create/create.component';
import { UpdateComponent } from './modules/admin/users/update/update.component';
import { DetailComponent } from './modules/admin/users/detail/detail.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    DetailComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
