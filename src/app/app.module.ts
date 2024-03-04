import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { LoginComponent } from './components/login/login.component';

// ********** Spinner
import { NgxSpinnerModule } from "ngx-spinner";

// ********** ApisExternas
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { LandingComponent } from './components/landing/landing.component';
// firebase with Provider
import { provideStorage, getStorage } from "@angular/fire/storage";
// firebase
import { AngularFireModule  } from "@angular/fire/compat";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment.development';
import { ProductosComponent } from './components/productos/productos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

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
    DraftComponent,
    LoginComponent,
    LandingComponent,
    ProductosComponent,
    GaleriaComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(( )=> initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxSpinnerModule

  ],
  exports: [
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
