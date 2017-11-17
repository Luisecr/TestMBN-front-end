import { Injectable } from '@angular/core';

import { Usuario } from '../entities/usuario';
import { FormGroup} from '@angular/forms';

import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService{
    private usuariosUrl = 'http://localhost:8080/usuarios';
    private console :Console;
    private headers = new Headers({'Content-Type': 'application/json'})

 
    constructor(
        private http : Http
    ){}

    create(formUser: FormGroup): Promise<Usuario> {
        console.log("Entró service");
        return this.http
          .post(this.usuariosUrl, formUser.value, {headers: this.headers})
          .toPromise()
          .then(res => res.json() as Usuario)
          .catch(this.handleError);
      }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
    }