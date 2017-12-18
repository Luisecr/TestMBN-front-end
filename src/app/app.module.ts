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
import 'hammerjs';

//CDK
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { MatNativeDateModule } from '@angular/material';

// http
import { HttpModule } from '@angular/http';

// Components
import { LoginComponent } from './login/login.component';
import { TechComponent } from './tech/tech.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

//import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogsModule } from './dialogs/dialogs.module';
// Services
import { UsuarioService } from './services/usuario.service';
import { TecnologiaService } from './services/tecnologia.service';
import { CategoriaService } from './services/categoria.service';
import { RespuestaService } from './services/respuesta.service';
import { QuestionnaireLoginService } from './services/questionnaire_login.service';

// Plugin
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';





@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TechComponent,
        QuestionnaireComponent,

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
        DialogsModule
    ],
    providers: [
        TecnologiaService,
        CategoriaService,
        RespuestaService,
        QuestionnaireLoginService,
        UsuarioService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
