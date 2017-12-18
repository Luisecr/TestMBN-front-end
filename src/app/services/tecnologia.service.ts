import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Tecnologia } from '../entities/tecnologia';

import 'rxjs/add/operator/toPromise';
import { Categoria } from '../entities/categoria';

@Injectable()
export class TecnologiaService {

    private techUrl = 'https://tech-back-mbn.herokuapp.com/tecnologias';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    newTech:Tecnologia;
    categoria:Categoria;
    constructor(
        private http: Http
    ) { 
        this.newTech =  new Tecnologia();
        this.categoria = new Categoria();
    }

    getTecnologias(): Promise<Tecnologia[]> {
        return this.http.get(this.techUrl)
            .toPromise()
            .then(response => response.json()._embedded.tecnologias as Tecnologia[])
            .catch(this.handleError);
    }

    getTecnologia(id: number): Promise<Tecnologia> {
        const url = `${this.techUrl}/${id}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Tecnologia)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    createTecnologia(nombreTecnologia: string): Promise<Tecnologia> {
      
        this.newTech.nombreTecnologia = nombreTecnologia;
        this.categoria.categoriaId = "https://localhost/categorias/97";
        const categoriaId = "categoriaId";
        this.newTech[categoriaId] = this.categoria;
        console.log(JSON.stringify(this.newTech));
        return this.http
            .post(this.techUrl, JSON.stringify(this.newTech) ,{ headers: this.headers })
            .toPromise()
            .then(res => res.json() as Tecnologia)
            .catch(this.handleError);
    }

}
