import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {

	transform(arrayInput : number[], args: any): any {
		let temp : number[] = arrayInput.slice();
		temp.sort()
		if(args === 'DESC'){
			temp = temp.reverse();
		}
		return temp;
	}

}
