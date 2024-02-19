import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { OrganigramaComponent } from './components/organigrama/organigrama.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch:'full', title: 'Principal'},
  {path: 'inicio', component: InicioComponent, title: 'Inicio'},
  {path: 'calendario', component: CalendarioComponent, title: 'Calendario'},
  {path: 'usuarios', component: UsuariosComponent, title: 'Usuarios'},
  {path: 'organigrama', component: OrganigramaComponent, title: 'Organigrama'},  
  {path: '**', component: NotFoundComponent, title: 'No Encontrada'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }