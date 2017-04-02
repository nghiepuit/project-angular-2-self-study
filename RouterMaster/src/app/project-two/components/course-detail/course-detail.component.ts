import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICourse } from './../../defines/course.interface';
import { CourseService } from './../../services/course.service';

@Component({
	selector: 'app-course-detail',
	templateUrl: './course-detail.component.html',
	styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

	course : ICourse;

	constructor(
		private _courseService : CourseService,
		private _routerService : Router,
		private _activatedRouteService : ActivatedRoute
	) { }

	ngOnInit() {
		let id : string = this._activatedRouteService.snapshot.params['id'];
		this.course = this._courseService.getCourseByID(id);
	}

	backToCourseList(){
		this._routerService.navigate(['courses']);
	}

}
