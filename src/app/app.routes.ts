import { Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { EntrenoComponent } from './componente/entreno/entreno.component';
import { ComidaComponent } from './componente/comida/comida.component';
import { PerfilComponent } from './componente/perfil/perfil.component';
import { SigninComponent } from './componente/autenticacion/signin/signin.component';
import { LoginComponent } from './componente/autenticacion/login/login.component';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent},
    {path:'entreno', component:EntrenoComponent},
    {path:'comida', component:ComidaComponent},
    {path:'perfil', component:PerfilComponent},
    {path:'registrar', component:SigninComponent},
    {path:'login', component:LoginComponent}, 
    {path:'',redirectTo:'/inicio',pathMatch:'full'},
    {path:'**',redirectTo:'/inicio',pathMatch:'full'}];
