import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { OrganigramaComponent } from './components/organigrama/organigrama.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { DraftComponent } from './components/draft/draft.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    UsuariosComponent,
    OrganigramaComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DraftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
