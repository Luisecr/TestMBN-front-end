import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Respuesta } from './respuesta.interface';
import { Tecnologia } from '../entities/tecnologia';
import { RespuestaService } from '../services/respuesta.service';
import { Router } from '@angular/router';
import { QuestionnaireLoginService } from '../services/questionnaire_login.service';
import { DialogsService } from '../dialogs/dialogs.service';

@Component({
  moduleId: module.id,
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input() tecnologias: Tecnologia[];
  @Input() usuarioId: number;
  public myForm: FormGroup; // our form model
  public dataSaved: boolean;
  public confirmDialogResult: any;

  // we will use form builder to simplify our syntax
  constructor(
    private _fb: FormBuilder,
    private respuestaService: RespuestaService,
    private router: Router,
    public questionnaireService: QuestionnaireLoginService,
    private dialogsService: DialogsService) { }

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
      respuestas: this._fb.array([
        //this.initQuestionnaire(),
      ])
    });

    if (this.tecnologias != null && this.usuarioId != null) {
      for (var i = 0; i < this.tecnologias.length; i++) {
        this.addQuestionnaire(this.tecnologias[i], this.usuarioId);
      }
    }

    this.dataSaved = true;
  }

  /*initQuestionnaire(tecnologia: Tecnologia) {
    // initialize our answers
    return this._fb.group({
      usuarioId: [0],
      tecnologiaId: this._fb.group({ // <-- the child FormGroup
        tecnologiaId: [tecnologia.tecnologiaId],
        nombreTecnologia: [tecnologia.nombreTecnologia]
      }),
      teorico: [0],
      practico: [0],
      proyecto: [0]
    });
  }*/

  addQuestionnaire(tecnologia: Tecnologia, usuarioId: number) {
    // add questionnaire to the list
    const control = <FormArray>this.myForm.controls['respuestas'];
    control.push(
      this._fb.group({
        usuarioId: [usuarioId],
        tecnologiaId: this._fb.group({ // <-- the child FormGroup
          tecnologiaId: [tecnologia.tecnologiaId],
          nombreTecnologia: [tecnologia.nombreTecnologia]
        }),
        teorico: [0, Validators.min(1)],
        practico: [0],
        proyecto: [0]
      }));
  }


  save(respuestas) {
    //console.log(respuestas);

    var respuestasEnCero = false;
    for (var i = 0; i < respuestas.length; i++) {
      if (respuestas[i].practico == 0 || respuestas[i].proyecto == 0 || respuestas[i].teorico == 0) {
        respuestasEnCero = true;
        break;
      }
    }

    if (respuestasEnCero) {
      this.openDialog(respuestas);
    } else {
      this.saveDataRecursive(respuestas, 0);
    }

  }

  //opens dialog for confirm zero values
  public openDialog(respuestas) {
    this.dialogsService
      .confirm('Advertencia', 'Algunas de sus respuestas contienen valores con 0%, ¿desea continuar?')
      .subscribe(res => {
        if (res == true) {
          this.saveDataRecursive(respuestas, 0);
        }
      });
  }

  // call API to save answers
  saveDataRecursive(respuestas, i) {
    this.respuestaService.create(respuestas[i]).
      then(respuesta => {
        i++;
        if (i < respuestas.length) {
          this.saveDataRecursive(respuestas, i);
        } else {
          this.questionnaireService.showMessage = true;
          this.router.navigateByUrl('');
        }
      }).
      catch(respuesta => {
        console.log(this.dataSaved);
        this.dataSaved = false;
        console.log(this.dataSaved);
      });
  }

}
