import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { appRouting } from './app.routing'

@NgModule({
  declarations: [
      AppComponent, DashboardComponent, LoginComponent, PageNotFoundComponent
  ],
  imports: [
      BrowserModule, HttpModule, BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule, appRouting, SharedModule.forRoot(), BusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
