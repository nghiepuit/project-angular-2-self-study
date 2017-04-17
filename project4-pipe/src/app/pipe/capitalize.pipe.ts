import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		return value.replace(/\w\S*/g,(item) => {
			return item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
		});
	}

}
