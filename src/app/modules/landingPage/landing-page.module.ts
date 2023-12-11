import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BehindComponent } from './behind/behind.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RankingComponent } from './ranking/ranking.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BehindComponent,
    HomeComponent,
    AboutComponent,
    RankingComponent,
    ContactComponent,
    FooterComponent,
    LandingPageComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class HomeModule {
  // constructor(public mytranslate: MyTranslateService) {}
 }
