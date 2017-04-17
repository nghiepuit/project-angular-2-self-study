import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'demo capitalize';
	arrNumber: number[] = [1,3,5,2,6,4,7,0];
	des : string = "Triều Tiên không hồi đáp đề nghị gặp gỡ từ giới ngoại giao Trung Quốc giữa lúc căng thẳng tăng cao, làm dấy lên nghi ngờ về ảnh hưởng của Bắc Kinh đối với nhà lãnh đạo Kim Jong Un.";
	categories : string[] = ["PHP","Angular","Java",".NET","NodeJS","MongoDB"];
}
