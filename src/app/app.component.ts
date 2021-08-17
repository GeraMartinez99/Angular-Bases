import { Component } from '@angular/core';


//Este decorador espera como argumento un objeto
//El cual tiene la propiedad 'selector', este tiene el nombre de la aplicación.
//El valor de selector está relacionado con la etiqueta <app-root> </app-root>
//que se encuentra en el index.html
//Luego esta el template url, el cual apunta al archivo que contiene el html de la aplicación
//styleUrls: apunta al  archivo que contiene el css, algo curioso de este archivo que es únicamente da estilos a un solo componente
//se podría decir que está encapsulado
//si se quisiera usar el css global, se tendría que llamar al archivo style.css, aunque no estoy seguro como agregar el archivo desde
//aquí
//Otra propiedad que se puede usar es template y es muy parecido a template url, con la diferencia que todo el html que se mostrará 
//no se llama desde otro archivo sino agrega aquí mismo, ya es cuestión de gustos como hacerlo, pero el beneficio de hacerlo en el mismo 
//archivo es que puedes ver su contraparte del ts aquí, en este caso lo haré desde un archivo a parte, no sé por qué sigo escribiendo esto xD
//espero leerlo algún día y reir.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>Buenas tardes :)</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 


}
