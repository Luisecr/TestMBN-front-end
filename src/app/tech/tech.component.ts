import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, AsyncPipe } from '@angular/common';

import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario';
import { TecnologiaService } from '../services/tecnologia.service';
import { Tecnologia } from '../entities/tecnologia';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-tech',
    templateUrl: './tech.component.html',
    styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

    @Input() usuario: Usuario;

    private tecnologias: Tecnologia[];
    private tecnologiasSelected: Tecnologia[];
    private tecnologiasSettings: {};

    constructor(
        private route: ActivatedRoute,
        private usuarioService: UsuarioService,
        private location: Location,
        private tecnologiaService: TecnologiaService
    ) { }

    ngOnInit() {
        this.route.paramMap.switchMap((params: ParamMap) => this.usuarioService.getUsuario(+params.get('id')))
            .subscribe(usuario => {
                this.usuario = usuario;
            });
        this.getTecnologias();

        this.tecnologiasSettings = {
            singleSelection: false,
            text: 'Seleccionar tecnologias',
            selectAllText: 'Seleccionar todas',
            unSelectAllText: 'Quitar todas',
            enableSearchFilter: true,
            searchPlaceholderText: 'Buscar tecnologia',
            classes: ''
        };
    }

    getTecnologias(): void {
        this.tecnologiaService.getTecnologias()
            .then(tecnologias => {
                this.tecnologias = tecnologias;
                const len = this.tecnologias.length;
                for (let i = 0; i < len; i += 1 ) {
                    const id = 'id';
                    const itemName = 'itemName';
                    this.tecnologias[i][id] = this.tecnologias[i].tecnologiaId;
                    this.tecnologias[i][itemName] = this.tecnologias[i].nombreTecnologia;
                }
                console.log(this.tecnologias);
            });
    }

    saveTechs(): void {
        console.log('Guardando tecnologias...');
        console.log(this.tecnologiasSelected);
        console.log('Despues...');
        this.cleanTechsJSON();
    }

    cleanTechsJSON(): void {
        console.log('Tecnologias antes...');
        console.log(this.tecnologiasSelected);
        if ( this.tecnologiasSelected.length > 0 ) {
            console.log('Dentro if');
            for (let i = 0; i < this.tecnologiasSelected.length; i++) {
                delete this.tecnologiasSelected[i]['id'];
                delete this.tecnologiasSelected[i]['itemName'];
            }
        }
        console.log('Tecnologias después...');
        console.log(this.tecnologiasSelected);
    }

    onItemSelect(item: any) {
        console.log(item);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
}
