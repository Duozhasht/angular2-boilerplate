import { Component } from '@angular/core';

//this can also be provided by a service - test purposes
export class Hero {
	constructor(id, name) {
		this.id = id
		this.name = name
	}

	print() {
		return 'My name is ' + this.name
	}
}

const heroes = [
	new Hero(1, 'Dead Pool'),
	new Hero(2, 'Venom'),
	new Hero(3, 'Joker'),
	new Hero(4, 'That guy from karate kid that lost the combat'),
];
//////////

@Component({
	selector: 'hero',
	templateUrl: 'app/views/hero/hero.html',
})


export class HeroComponent {
	constructor() {
		this.title = 'HomePage'
		this.heroes = heroes
	}
	clicked() {
		alert('Hello MotherFucker!')
	}

}
