import { Injectable } from '@angular/core';
import { Respuesta } from '../entities/respuesta';
import { FormGroup } from '@angular/forms';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RespuestaService {
    private respuestasUrl = 'https://tech-back-mbn.herokuapp.com/respuestas';
    private console: Console;
    private headers = new Headers({ 'Content-Type': 'application/json' })


    constructor(
        private http: Http
    ) { }

    create(respuesta): Promise<Respuesta> {
        return this.http
            .post(this.respuestasUrl, respuesta, { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Respuesta)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}