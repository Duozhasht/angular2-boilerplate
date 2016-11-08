import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component.js'


const routes = [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent }
		]

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	declarations: [
		HomeComponent
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
