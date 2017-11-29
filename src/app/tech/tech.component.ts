import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    private seleccionadas: boolean;
    private vacio: boolean;

    constructor(
        private route: ActivatedRoute,
        private usuarioService: UsuarioService,
        private location: Location,
        private tecnologiaService: TecnologiaService,
        private router: Router
    ) { }

    ngOnInit() {
        this.seleccionadas = false;
        this.vacio = true;

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
            });
    }

    cleanTechsJSON(): void {
        if ( this.tecnologiasSelected.length > 0 ) {
            for (let i = 0; i < this.tecnologiasSelected.length; i++) {
                delete this.tecnologiasSelected[i]['id'];
                delete this.tecnologiasSelected[i]['itemName'];
            }
        }
    }

    activeCuestionario(): void {
        this.seleccionadas = true;
        this.cleanTechsJSON();
    }

    isEmpty() {
        return this.vacio;
    }

    onItemSelect(item: any) {
        this.vacio = false;
        // console.log(item);
    }
    OnItemDeSelect(item: any) {
        if ( this.tecnologiasSelected.length > 0 ) {
            this.vacio = false;
        } else {
            this.vacio = true;
        }
        // console.log(item);
    }
    onSelectAll(items: any) {
        this.vacio = false;
        // console.log(items);
    }
    onDeSelectAll(items: any) {
        this.vacio = true;
        // console.log(items);
    }
}
