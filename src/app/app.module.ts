import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { DataService } from '../services/DataService';
import { ReposComponent } from './repos.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    ReposComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }