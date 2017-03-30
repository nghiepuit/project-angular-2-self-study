import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// Project one
import { AboutComponent } from './project-one/about/about.component';
import { ContactComponent } from './project-one/contact/contact.component';
import { HomeComponent } from './project-one/home/home.component';
import { MainComponent } from './project-one/main/main.component';
import { NotFoundComponent } from './project-one/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // Project One
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
