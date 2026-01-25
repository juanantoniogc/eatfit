import { Component } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service.service';
import { strongPasswordValidator, matchPasswordValidator } from '../../../validations/signin.validation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private routerService: Router, private authService: AuthService) {}

  formLogin = {
    email: '',
    password: ''
  };

  error = false;

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then((user: UserCredential) => {
        //TODO: Guardar en el Firebase Realtime Database los datos del usuario
        this.routerService.navigate(['/inicio']); // cambia a /task si corresponde
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      });
  }

  onSubmit() {
    this.error = false;

    if (this.formLogin.email.length > 6) {
      this.authService.login(this.formLogin.email, this.formLogin.password)
        .then((user: UserCredential) => {
          //TODO: Guardar en el Firebase Realtime Database los datos del usuario
          this.routerService.navigate(['/inicio']); // cambia a /task si corresponde
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });

      console.log(this.formLogin.email);
      console.log(this.formLogin.password);
    } else {
      this.error = true;
    }
  }
}