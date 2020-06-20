import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxInputNumberModule } from 'ngx-input-number'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
