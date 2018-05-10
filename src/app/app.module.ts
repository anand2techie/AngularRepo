import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponentComponent } from './hello-world-component/hello-world-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloWorldComponentComponent]
})
export class AppModule { }
