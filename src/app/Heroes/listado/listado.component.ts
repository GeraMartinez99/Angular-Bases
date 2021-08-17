import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[] = ['SpiderMan','ironman', 'Hulk', 'Thor','Loki'];
  //De esta forma está correcto pero no se ve muy bien
  //heroeBorrado:string | undefined = '...';
  heroeBorrado:string = '';
  
  constructor() {
    //el constructor de ejecuta ante de la renderización del componente
    
  }
  //Este se encarga inicializar cosas, por ejemplo si utilizamos un servicio y hacemos una petición 
  //se trae la información
  ngOnInit(): void {
  }

  borrarHeroe(): void {
    console.log('borrando...');

    //Usamos el encadenamiento opcional
    //Si regresa undifined entonces regresamos un string vacio
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
