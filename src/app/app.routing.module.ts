import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [   
        {
          path: 'login',
          component: LoginComponent
        },/*,
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        */{
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