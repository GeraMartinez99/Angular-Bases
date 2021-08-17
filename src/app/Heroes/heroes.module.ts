import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HereoComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//El objetivo de los modulos es encapsular las cosas y otra es la carga floja o lazy loading
//Este termino se refiere a que se cargan los modulos bajo demanda, es decir, unicamente los modulos que va a ocupar el usuario
@NgModule ({
    //Aquí ponemos todos los componentes que están relaciondos entre sí
    //Cabe aclarar que todos los componentes de este modulo no son visibles fuera de aquí
    //A menos que se especifique mediante un export
    declarations: [
        HereoComponent,
        ListadoComponent
    ],
    exports: [ListadoComponent],
    //Aquí siempre vamos a importar otros modulos
    imports: [
        //Es importante hacer el import de este modulo ya que sin el obtendriamos errores, 
        //debido a que ocupamos directivas como ngIF o ngFor y este módulo provee estás directivas
        CommonModule
    ]
})
export class HeroesModule {

}