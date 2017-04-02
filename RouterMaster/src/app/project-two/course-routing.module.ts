import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseDetailGuardService } from './services/course-detail-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: '', component: CourseListComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailComponent, canActivate: [CourseDetailGuardService] },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseRoutingModule {}