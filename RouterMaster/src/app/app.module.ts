import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// Project one
import { AboutComponent } from './project-one/about/about.component';
import { ContactComponent } from './project-one/contact/contact.component';
import { HomeComponent } from './project-one/home/home.component';
import { MainComponent } from './project-one/main/main.component';
import { NotFoundComponent } from './project-one/not-found/not-found.component';
// Project two
// import { CourseModule } from './project-two/course.module';
// Project three
import { CourseModule } from './project-three/course.module';

@NgModule({
  declarations: [
    AppComponent,
    // Project One
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [
    // Chú ý thứ tự
    BrowserModule,
    CourseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
