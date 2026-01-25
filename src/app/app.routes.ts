import { Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { EntrenoComponent } from './componente/entreno/entreno.component';
import { ComidaComponent } from './componente/comida/comida.component';
import { PerfilComponent } from './componente/perfil/perfil.component';
import { SigninComponent } from './componente/autenticacion/signin/signin.component';
import { LoginComponent } from './componente/autenticacion/login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'entreno', component: EntrenoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'comida', component: ComidaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'perfil', component: PerfilComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: 'registrar', component: SigninComponent, ...canActivate(() => redirectLoggedInTo(['/inicio'])) },
  { path: 'login', component: LoginComponent, ...canActivate(() => redirectLoggedInTo(['/inicio'])) },

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];