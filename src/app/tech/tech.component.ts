import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from'../services/usuario.service';
import { Usuario } from '../entities/usuario';
import { AsyncPipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location,


  ) { 
    
  }
  
  ngOnInit() {
    
    this.route.paramMap.switchMap((params: ParamMap)  => this.usuarioService.getUsuario(+params.get('id')))
    .subscribe(usuario => {
      this.usuario = usuario;
      console.log(usuario);
    });
  }

}
