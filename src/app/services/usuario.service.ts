import { Injectable } from '@angular/core';

import { Usuario } from '../entities/usuario';
import { FormGroup } from '@angular/forms';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {
    private usuariosUrl = 'https://tech-back-mbn.herokuapp.com/usuarios';
    private console: Console;
    private headers = new Headers({ 'Content-Type': 'application/json' })


    constructor(
        private http: Http
    ) { }
    getUsuarios(): Promise<Usuario[]> {
        return this.http.get(this.usuariosUrl)
            .toPromise()
            .then(response => response.json()._embedded.usuarios as Usuario[])
            .catch(this.handleError);
    }
    getUsuario(id: number): Promise<Usuario> {
        const url = `${this.usuariosUrl}/${id}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(
            response => response.json() as Usuario
            )
            .catch(this.handleError);

    }
    create(formUser: FormGroup): Promise<Usuario> {

        return this.http
            .post(this.usuariosUrl, formUser.value, { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Usuario)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        console.log(error =error.json());
        return Promise.reject(error.message || error);
    }
}