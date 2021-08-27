import { NgModule,Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeanbarComponent } from './components/beanbar/beanbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormbarComponent } from './components/formbar/formbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BackendfarmerService } from './services/backendfarmer.service';
import { HttpClientModule } from '@angular/common/http';
import { FarmerComponent } from './components/farmer/farmer.component';


@NgModule({
  declarations: [
    AppComponent,
    BeanbarComponent,
    FormbarComponent,
    FarmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule ,
    HttpClientModule   
  ],
  providers: [BackendfarmerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
