import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './app.material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Routing
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import {  MatNativeDateModule } from '@angular/material';
import 'hammerjs';

//http
import {HttpModule} from '@angular/http';
//components
import { LoginComponent } from './login/login.component';

//Services
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
