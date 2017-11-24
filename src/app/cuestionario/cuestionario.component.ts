import { Component, OnInit, Input } from '@angular/core';
import { RespuestaService } from '../services/respuesta.service';

import { Tecnologia } from '../entities/tecnologia';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  @Input() tecnologias: Tecnologia[];

  constructor(
    private respuestaService: RespuestaService
  ) { }

  ngOnInit() {
      if ( this.tecnologias != null ) {
          console.log('En cuestionario: ', this.tecnologias );
      }
  }

  exampleSchema = {
    "type": "object",
    "properties": {
      "respuestas": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "tecnologiaId": {
              "type": "object",
              "properties": {
                "tecnologiaId": { "type": "number" },
                "nombreTecnologia": { "type": "string" }
              }
            },
            "conocimiento_teorico_div": { "type": "string" },
            "teorico": { "type": "number" },
            "conocimiento_practico_div": { "type": "string" },
            "practico": { "type": "number" },
            "conocimiento_aplicado_div": { "type": "string" },
            "proyecto": { "type": "number" },
            "usuarioId": { "type": "number" }

          }
        }
      }
    }
  };

  exampleLayout = [
    {
      "key": "respuestas",
      "type": "array",
      "title": "Califique su conocimiento en cada una de las tecnologías: ",
      "listItems": 0,
      "items": [{
        "type": "div",
        "displayFlex": false,
        "flex-direction": "row",
        "items": [
          { "key": "respuestas[].tecnologiaId.tecnologiaId", "type": "number", "condition": "false" },
          { "key": "respuestas[].tecnologiaId.nombreTecnologia", "type": "text", title: 'Tecnología', readonly: true },
          { "key": "respuestas[].conocimiento_teorico_div", "type": "section", title: 'Conocimiento teórico' },
          { "key": "respuestas[].teorico", "type": "range" },
          { "key": "respuestas[].conocimiento_practico_div", "type": "section", title: 'Conocimiento práctico' },
          { "key": "respuestas[].practico", "type": "range" },
          { "key": "respuestas[].conocimiento_aplicado_div", "type": "section", title: 'Porcentaje aplicado en proyecto real' },
          { "key": "respuestas[].proyecto", "type": "range" }
        ]
      }]
    },
    {
      type: 'submit', title: 'Guardar'
    }
  ];

  exampleJsonObject = {
    "respuestas": [
      { "usuarioId": 1, "tecnologiaId": { "tecnologiaId": 5, "nombreTecnologia": "Java EE" } }
      //{ "usuarioId": 1, "tecnologiaId": { "tecnologiaId": 6, "nombreTecnologia": "Java" } },
      //{ "usuarioId": 1, "tecnologiaId": { "tecnologiaId": 7, "nombreTecnologia": "CSS" } },
    ]
  };


  /*exampleSchema = {
    "type": "object",
    "properties": {
      "cuestionario": { "type": "string" },
      "conocimiento_teorico_div": { "type": "string" },
      "teorico": { "type": "number" },
      "conocimiento_practico_div": { "type": "string" },
      "practico": { "type": "number" },
      "conocimiento_aplicado_div": { "type": "string" },
      "proyecto": { "type": "number" },
      "usuarioId": { "type": "number" },
      "tecnologiaId": { "type": "number" }
    }
  };*/

  /*exampleLayout = [
    { "key": "cuestionario", "type": "div", title: 'Tecnología: Angular2' },
    { "key": "conocimiento_teorico_div", "type": "section", title: 'Conocimiento teórico' },
    { "key": "teorico", "type": "range" },
    { "key": "conocimiento_practico_div", "type": "section", title: 'Conocimiento práctico' },
    { "key": "practico", "type": "range" },
    { "key": "conocimiento_aplicado_div", "type": "section", title: 'Porcentaje aplicado en proyecto real' },
    { "key": "proyecto", "type": "range" },
    { "key": "usuarioId", "type": "number", "condition": "false"},
    { "key": "tecnologiaId", "type": "number", "condition": "false"},
    { type: 'submit', title: 'Guardar' },
  ];*/

  //exampleJsonObject = { usuarioId: 1, tecnologiaId: 5 };
  //[(ngModel)]="exampleJsonObject"

  exampleOnSubmitFn(formData) {
    console.log("Datos a enviar===>");
    console.log(formData.respuestas[0]);
    this.respuestaService.create(formData.respuestas[0]).then(respuesta => { console.log(respuesta); });
  };



}
