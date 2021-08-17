import { Component } from "@angular/core";

@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HereoComponent {
    nombre: string = 'Ironman'
    edad: number = 55

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        return `Nombre: ${this.nombre} - Edad: ${this.edad}`;
    }
    //Como se puede observar es muy fácil acceder al Dom con angular
    //Y con este ejercicio podemos poner en práctica el concepto de
    //one way data biding que significa una sola vía y se refiere a que 
    //se puede cambiar una propiedad solo de una forma. Es decir desde el

    //Es raro que se cambie desde el html, aunque bien se puede con el two data biding, aunque no se
    //recomienda hacerlo, hay buenas prácticas para prevenir el usar este concepto
    //Es muy eficiente angular al momente de actualizar el dom, ya que como podemos
    //observar que solo cambiar la propiedad correspondiente, y aunque se siga ejecutando cierto código
    //angular es inteligente para saber si hay que procesar o no un nuevo cambio
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 35;
    }
}