import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./componente/footer/footer.component";
import { SigninComponent } from "./componente/autenticacion/signin/signin.component";
import { User } from '@angular/fire/auth';
import { AuthService } from './services/auth.service.service';
import { Subscription } from 'rxjs';
import { LoginComponent } from "./componente/autenticacion/login/login.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent, InicioComponent, FooterComponent, SigninComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  user: User | null = null;
  isAuthenticated = false;
  isLoading = true; // Variable que controla el estado de carga

  private sub?: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => { // Esto simula el tiempo de carga (puedes ajustar este tiempo)
      this.isLoading = false; // Detener la animación después de 3 segundos
    }, 3000);

    this.sub = this.authService.getUserAuthenticated().subscribe((u) => {
      this.user = u;
      this.isAuthenticated = !!u;

      console.log('AUTH STATE =>', u ? 'LOGUEADO' : 'NO LOGUEADO', u);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
