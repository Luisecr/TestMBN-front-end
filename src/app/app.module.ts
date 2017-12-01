import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Routing
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { MatNativeDateModule } from '@angular/material';
import 'hammerjs';

// http
import { HttpModule } from '@angular/http';
// Components
import { LoginComponent } from './login/login.component';
import { TechComponent } from './tech/tech.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

// Services
import { UsuarioService } from './services/usuario.service';
import { TecnologiaService } from './services/tecnologia.service';
import { CategoriaService } from './services/categoria.service';
import { RespuestaService} from './services/respuesta.service';
import { QuestionnaireLoginService } from './services/questionnaire_login.service';

// Plugin
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
/* //JSONSchema
import { JsonSchemaFormModule } from 'angular2-json-schema-form';
 */
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TechComponent,
        QuestionnaireComponent
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
        HttpModule,
        AngularMultiSelectModule,
       /*  JsonSchemaFormModule */
    ],
    providers: [
        UsuarioService,
        TecnologiaService,
        CategoriaService,
        RespuestaService,
        QuestionnaireLoginService
    ],
    bootstrap: [AppComponent]})

export class AppModule { }
