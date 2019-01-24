import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CricketComponent } from './cricket/cricket.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    CricketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
