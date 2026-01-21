import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./componente/footer/footer.component";
import { SigninComponent } from "./componente/autenticacion/signin/signin.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent, InicioComponent, FooterComponent, SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eatfit';
}
