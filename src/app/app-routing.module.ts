import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { OrganigramaComponent } from './components/organigrama/organigrama.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { DraftComponent } from './components/draft/draft.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full', title: 'Principal'},
  {path: 'login', component: LoginComponent, title: 'Log In'},
  {path: 'inicio', component: InicioComponent, title: 'Inicio'},
  {path: 'calendario', component: CalendarioComponent, title: 'Calendario'},
  {path: 'usuarios', component: UsuariosComponent, title: 'Usuarios'},
  {path: 'organigrama', component: OrganigramaComponent, title: 'Organigrama'},  
  {path: 'draft', component: DraftComponent, title: 'Draft'},  
  {path: '**', component: NotFoundComponent, title: 'No Encontrada'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
