import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { InicioComponent } from './componente/inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eatfit';
}
