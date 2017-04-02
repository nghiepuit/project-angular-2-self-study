import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICourse } from './../../defines/course.interface';
import { CourseService } from './../../services/course.service';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

	courses : ICourse[];

	constructor(
		private _courseService : CourseService,
		private _routerService : Router,
	) { }

	ngOnInit() {
		this.courses = this._courseService.getCourses();
	}

	viewDetail(courseID : number){
		this._routerService.navigate(['course',courseID],{
			queryParams: {
				page : courseID
			}
		});
		// this._routerService.navigateByUrl('course/' + courseID);
	}

}
