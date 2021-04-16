import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { MaladieComponent } from './components/maladie/maladie.component';
import { VaccinComponent } from './components/vaccin/vaccin.component';
import { PreventionComponent } from './components/prevention/prevention.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    TestComponent,
    MaladieComponent,
    VaccinComponent,
    PreventionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
