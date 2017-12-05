import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from'../services/usuario.service';
import { Usuario } from '../entities/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  userForm: FormGroup;
  usuarios: Usuario[];
  Usuario: Usuario;
  loginError: boolean;
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ){ 
    this.createForm();
  }
  createForm(){
    this.userForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      correo: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  add(userForm: FormGroup): void {
    console.log("entró!");
    this.usuarioService.create(userForm)
      .then(usuario => {
        this.router.navigate(['/tech', usuario.usuarioId])
      }).catch(res=>this.loginError=true);
      
  }
  gotoTech(): void {
    
  }
  getUsuarios():void{
    this.usuarioService.getUsuarios().then(usuarios => {this.usuarios = usuarios
      console.log(usuarios);
      console.log("..........");
      console.log(this.usuarios);
    }
    )
  }
}
