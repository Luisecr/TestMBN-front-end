import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Tecnologia } from '../entities/tecnologia';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TecnologiaService {

    private techUrl = 'https://tech-back-mbn.herokuapp.com/tecnologias';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(
        private http: Http
    ) { }

    getTecnologias(): Promise<Tecnologia[]> {
        return this.http.get(this.techUrl)
            .toPromise()
            .then( response => response.json()._embedded.tecnologias as Tecnologia[] )
            .catch(this.handleError);
    }

    getTecnologia(id: number): Promise<Tecnologia> {
        const url = `${this.techUrl}/${id}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then( response => response.json() as Tecnologia )
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
