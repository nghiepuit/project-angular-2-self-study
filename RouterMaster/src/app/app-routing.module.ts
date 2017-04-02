import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
// Project one
import { AboutComponent } from './project-one/about/about.component';
import { ContactComponent } from './project-one/contact/contact.component';
import { HomeComponent } from './project-one/home/home.component';
import { MainComponent } from './project-one/main/main.component';
import { NotFoundComponent } from './project-one/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'about/detail', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}