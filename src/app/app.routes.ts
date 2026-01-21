import { Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { EntrenoComponent } from './componente/entreno/entreno.component';
import { ComidaComponent } from './componente/comida/comida.component';
import { PerfilComponent } from './componente/perfil/perfil.component';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent},
    {path:'entreno', component:EntrenoComponent},
    {path:'comida', component:ComidaComponent},
    {path:'perfil', component:PerfilComponent},
    {path:'',redirectTo:'/inicio',pathMatch:'full'},
    {path:'**',redirectTo:'/inicio',pathMatch:'full'}];
