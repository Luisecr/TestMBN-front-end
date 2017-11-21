import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [   
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'tech/:id',
          component: TechComponent
        },
        {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
        }/*,
        {
          path: 'detail/:id',
          component: HeroDetailComponent
        }      */
];

@NgModule(
    {
        imports: [ RouterModule.forRoot(routes)],
        exports: [ RouterModule]
    }
)

export class AppRoutingModule {
    
}