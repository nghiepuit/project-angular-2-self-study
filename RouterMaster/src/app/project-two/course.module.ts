import { NgModule } from '@angular/core';

//Routing
import { CourseRoutingModule } from './course-routing.module';
// Project two
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
// Service
import { CourseService } from './services/course.service';
import { CourseDetailGuardService } from './services/course-detail-guard.service';

// SharedModule
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
  ],
  imports: [
    
    CourseRoutingModule,
    SharedModule
  ],
  providers: [CourseService,CourseDetailGuardService],
  bootstrap: []
})
export class CourseModule { }
