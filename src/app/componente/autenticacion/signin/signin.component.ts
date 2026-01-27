import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service.service';
import { strongPasswordValidator, matchPasswordValidator } from '../../../validations/signin.validation';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  
  registerForm: FormGroup;
  showPasswordError = false;
  
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, strongPasswordValidator]],
      'confirmPassword': ['', [Validators.required, matchPasswordValidator]]
    });
  }
  
  onSubmit() {
    if (this.registerForm.valid) {
      const name = this.registerForm.get('name')?.value;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      
      this.authService.register(email, password).then((user: UserCredential) => {
        console.log('Usuario registrado:', user);
        this.router.navigate(['/inicio']);
      }).catch((error) => {
        console.error('Error en registro:', error);
      });
    }
  }
}