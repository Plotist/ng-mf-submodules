import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NoMfReactComponentWrapper} from '../components/hideable-state-display/NoMfReactComponentWrapper';
// import {RemoteReactComponentWrapper} from '../components/remote-react-component/RemoteReactComponentWrapper';
import {RemoteReactModuleWrapperComponent} from '../components/remote-react-component/RemoteReactModuleWrapper';

@NgModule({
  declarations: [
    AppComponent,
    NoMfReactComponentWrapper,
    RemoteReactModuleWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
