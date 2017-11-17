import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from'../services/usuario.service';
import { Usuario } from '../entities/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  userForm: FormGroup;
  usuarios: Usuario[];
  
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
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
      .then(usuario => this.usuarios.push(usuario)
      );
     
  }
}
