import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavBar } from './nav-bar/nav-bar.js';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBar
  ],
  exports: [
    NavBar

  ]
})

export class ComponentsModule { }