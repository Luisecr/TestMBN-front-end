import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TechComponent } from './tech/tech.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'questionnaire',
          component: QuestionnaireComponent
        },
        {
          path: 'tech/:id',
          component: TechComponent
        },
        {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
        }
];

@NgModule(
    {
        imports: [ RouterModule.forRoot(routes)],
        exports: [ RouterModule]
    }
)

export class AppRoutingModule {
    
}