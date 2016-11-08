import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: 'app/views/home/home.html'
})

export class HomeComponent {
	constructor(){
		this.title = "HomePage";
	}
}
