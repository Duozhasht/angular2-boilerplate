import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component.js'
import { HeroComponent } from './views/hero/hero.component.js'


const routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'hero', component: HeroComponent}
	]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes, { useHash: true })
	],

	declarations: [
		HomeComponent,
		HeroComponent
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
