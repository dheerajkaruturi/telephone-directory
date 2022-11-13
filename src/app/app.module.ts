import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CreateContactComponent } from './create-contact/create-contact.component';


@NgModule({
  declarations: [AppComponent, CreateContactComponent],

  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
