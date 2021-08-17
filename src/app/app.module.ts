import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';

import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

//Este decorador es especial porque especificamos información
//importante
//Ya que este es el único módulo de momento, entonces importaremos todos los componentes aquí
@NgModule({
  //En este parte se definen los componentes
  declarations: [
    AppComponent
    //Como los componentes ya son ocupados por otro modulo es mejor importar el modulo que todos los componentes
    //porque si fuera el caso donde se tienen 100 componentes habría que agregar todos aquí
    // HereoComponent,
    // ListadoComponent
  ],
  //Aquí se declaran los modulos que se van a ocupar
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  //En providers se declaran los servicios asociados a un módulo en especifico
  providers: [],
  //Este es el componente principal y es el componente que queremos lanzar primero
  bootstrap: [AppComponent]
})
export class AppModule { }
