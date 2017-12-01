import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Categoria } from '../entities/categoria';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

    private categoriasUrl = 'https://tech-back-mbn.herokuapp.com/categorias';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(
        private http: Http
    ) { }

    getCategorias(): Promise<Categoria[]> {
        return this.http.get(this.categoriasUrl)
            .toPromise()
            .then(response => response.json()._embedded.categorias as Categoria[])
            .catch(this.handleError);
    }
    getCategoria(id: number): Promise<Categoria> {
        const url = `${this.categoriasUrl}/${id}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then( response => response.json() as Categoria )
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
