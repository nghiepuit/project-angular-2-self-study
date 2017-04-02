import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CourseService } from './../services/course.service';

@Injectable()
export class CourseDetailGuardService implements CanActivate {

	constructor(
		private _routerService : Router,
		private _courseService : CourseService
	) { }	

	canActivate(route : ActivatedRouteSnapshot) : boolean{
		let id : string = route.url[1].path;
		if(this._courseService.getCourses().indexOf(this._courseService.getCourseByID(id)) < 0){
			this._routerService.navigate(['courses']);
			return false;
		}
		return true;
	}

}