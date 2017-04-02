import { Injectable } from '@angular/core';
import { ICourse } from './../defines/course.interface';

@Injectable()
export class CourseService {

	courses : ICourse[] = [];
	
	constructor() {
		this.courses = [
			{ id : "C01", name : "Angular 2", description : "Khóa học angular 2 cho web front end developer" },
			{ id : "C02", name : "ASP.NET", description : "Khóa học lập trình c# asp.net mvc web api" },
			{ id : "C03", name : "PHP", description : "Khóa học backend php" },
			{ id : "C04", name : "JSP", description : "Khóa học web java" },
			{ id : "C05", name : "Typescript", description : "Khóa học bổ túc cho angular 2" },
		];
	}

	getCourses() : ICourse[]{
		return this.courses;
	}

	getCourseByID(id : string) : ICourse{
		let result : ICourse = null;
		for(let course of this.courses){
			if(course.id == id){
				result = course;
				break;
			}
		}
		return result;
	}

}