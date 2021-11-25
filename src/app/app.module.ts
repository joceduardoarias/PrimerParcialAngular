import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { RepartidorDetalleComponent } from './components/repartidor-detalle/repartidor-detalle.component';
import { ListadoRepartidoresComponent } from './components/listado-repartidores/listado-repartidores.component';
import { RepartidorComponent } from './components/repartidor/repartidor.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { AltaPizzaComponent } from './components/alta-pizza/alta-pizza.component';
import { ModificarPizzaComponent } from './components/modificar-pizza/modificar-pizza.component';
import { EliminarPizzaComponent } from './components/eliminar-pizza/eliminar-pizza.component';
// import { HttpService } from "./services/http.service";

// Import library module spinner
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { GestionarRepartoComponent } from './components/gestionar-reparto/gestionar-reparto.component';
import { ListarPizzasComponent } from './components/listar-pizzas/listar-pizzas.component';
import { ListarContenedoresComponent } from './components/listar-contenedores/listar-contenedores.component';
import { ModificarConetendorComponent } from './components/modificar-conetendor/modificar-conetendor.component';
import { EliminarContenedorComponent } from './components/eliminar-contenedor/eliminar-contenedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AltaRepartidorComponent,
    ListaPaisesComponent,
    RepartidorDetalleComponent,
    ListadoRepartidoresComponent,
    RepartidorComponent,
    DetallePaisComponent,
    PizzaComponent,
    AltaPizzaComponent,
    ModificarPizzaComponent,
    EliminarPizzaComponent,
    NavBarComponent,
    RegistrarComponent,
    GestionarRepartoComponent,
    ListarPizzasComponent,
    ListarContenedoresComponent,
    ModificarConetendorComponent,
    EliminarContenedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
