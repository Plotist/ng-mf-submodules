import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NoMfReactComponentWrapper} from '../components/hideable-state-display/NoMfReactComponentWrapper';

@NgModule({
  declarations: [
    AppComponent,
    NoMfReactComponentWrapper
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
