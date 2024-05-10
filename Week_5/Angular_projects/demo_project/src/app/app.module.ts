import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloTeamComponent} from './hello-team.component';
import { ContactInfoComponent } from './contact-info/contact-info.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HelloTeamComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ContactInfoComponent]
})
export class AppModule { }
