import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'summary'
})
export class SummaryPipe implements PipeTransform {

	transform(value: string, arg1: number, arg2 : string): any {
		let totalCharacter : number = arg1 > 0 ? arg1 : 20;
		let prefix :string = (arg2) ? (arg2) : '...';
		if(value){
			return value.substr(0,totalCharacter) + prefix;
		}else{
			return '';
		}
	}

}
