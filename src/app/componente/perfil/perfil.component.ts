import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service.service';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  private auth = inject(Auth);

  constructor(private router: Router) {}

  cerrarSesion() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/login']); // o /signin
      })
      .catch((error) => {
        console.log('Error al cerrar sesión:', error);
      });
  }
}
