import { Component } from "@angular/core";

//En este archivo estamos aprendiendo como crear un componente 
//Para eso es necesario importar el decorador componente de Angular
@Component ({
    //Se recomienda poner siempre app
    selector: 'app-contador',
    template: `
            <!-- No estoy seguro si esto es propio de ts o de angular
        pero lo interesante es que usando la doble llave podemos imprimir propiedades de la clase
        o cierto código de js-->

        <h1>{{ 1+1}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <!-- Ahora haremos un contador-->
        <!-- <span>{{contador}}</span> -->
        <!-- Usar la expresión contador += 1; del lado del "template"(es decir del lado del html)
        no es del todo valido, de hecho es recomendable hacerlo con el componente de ts o más bien la clase
        quizá solo es casos de que sea muy sencillo lo que se va a realizar-->
        <button (click)="acumular(-base);">{{-base}}</button>
        <!--Si intentamos asignar un parámetro de tipo string, gracias a ts 
        obtendremos un error-->
        <span>{{contador}}</span>
        <button (click)="acumular(base);">+{{base}}</button>
    
    `
})

//Como la vamos a utilizar fuera de este archivo entonces
//antecedemos a la clase con la palabra reservada export
export class ContadorComponent {
    title: string = 'bases';
    contador:number = 10;
    base: number = 5;
  
    //Hay que observar que basicamente se repite nuestro código
    //en ambas funciones, por lo tanto refactorizamos
    // sumar() {
    //   this.contador += 1; 
    // }
    // restar() {
    //   this.contador -= 1;
    // }
    acumular( valor: number ) {
      this.contador += valor;
    }
}