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

    // Plugin
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

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

        this.dropdownList = [
            { 'id': 1, 'itemName': 'India' },
            { 'id': 2, 'itemName': 'Singapore' },
            { 'id': 3, 'itemName': 'Australia' },
            { 'id': 4, 'itemName': 'Canada' },
            { 'id': 5, 'itemName': 'South Korea' },
            { 'id': 6, 'itemName': 'Germany' },
            { 'id': 7, 'itemName': 'France' },
            { 'id': 8, 'itemName': 'Russia' },
            { 'id': 9, 'itemName': 'Italy' },
            { 'id': 10, 'itemName': 'Sweden' }
        ];
        this.selectedItems = [
            { 'id': 2, 'itemName': 'Singapore' },
            { 'id': 3, 'itemName': 'Australia' },
            { 'id': 4, 'itemName': 'Canada' },
            { 'id': 5, 'itemName': 'South Korea' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: 'Select Countries',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: 'myclass custom-class'
        };
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
            });
        const data = JSON.stringify(this.tecnologias);
        console.log(data);
    }

    saveTechs(): void {
        console.log('Guardando tecnologias...');
        console.log(this.tecnologiasSelected);
        console.log('Despues...');
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
