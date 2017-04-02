import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ICourse } from './../../defines/course.interface';
import { CourseService } from './../../services/course.service';

@Component({
	selector: 'app-course-detail',
	templateUrl: './course-detail.component.html',
	styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

	course : ICourse;
	subscriptionParams : Subscription;
	subscriptionQueryParams : Subscription;
	page : number = -1;

	constructor(
		private _courseService : CourseService,
		private _routerService : Router,
		private _activatedRouteService : ActivatedRoute
	) { }

	ngOnInit() {
		// let id : number = parseInt(this._activatedRouteService.snapshot.params['id']);
		// this.course = this._courseService.getCourseByID(id);

		this.subscriptionParams = this._activatedRouteService.params.subscribe((params : Params) => {
			let id : number = parseInt(params['id']);
			this.course = this._courseService.getCourseByID(id);
		});

		this.subscriptionQueryParams = this._activatedRouteService.queryParams.subscribe(
			(params : Params) => {
				this.page = params['page'];
			}
		);

	}

	ngOnDestroy(){
		this.subscriptionParams.unsubscribe();
		this.subscriptionQueryParams.unsubscribe();
	}

	backToCourseList(){
		this._routerService.navigate(['courses']);
	}

}
