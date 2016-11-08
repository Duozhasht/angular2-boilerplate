import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/*
import { HttpManager } from './services/http.manager.js';
import { MockService } from './services/mock.service.js';
*/
import { AppComponent } from './app.component.js';
import { ComponentsModule } from './components/components.module.js';
import { AppRoutingModule } from './app.routing.module.js';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

/*

  providers: [
    HttpManager,
    MockService
  ],

*/