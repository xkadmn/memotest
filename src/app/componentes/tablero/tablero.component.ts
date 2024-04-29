
import { Component } from '@angular/core';
import { Pieza } from '../../Clases/pieza';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
  public piezas: Array<Pieza> = new Array<Pieza>();
  public dorso: string = "https://e0.pxfuel.com/wallpapers/217/415/desktop-wallpaper-mario-star.jpg";

  constructor() {
    let numeros: Number[] = new Array<Number>();

    let cantPiezas = 8 ;
    while (numeros.length < cantPiezas) {
      let valor = Math.floor(Math.random() * (cantPiezas / 2));
      if (valor < (cantPiezas / 2) && numeros.filter(x => x == valor).length < 2)
        numeros.push(valor);
    }

    numeros.forEach(element => {
      let imagen = "";
      switch (element) {
        case 0:
          imagen = 'https://mario.nintendo.com/static/a5f7fe49f4862aa68eaba347ee05c336/02be2/mario.png';
          break;
        case 1:
          imagen = 'https://mario.nintendo.com/static/12386c8cabe28d812b427d21c9f26d52/d9801/luigi.png';
          break;
        case 2:
          imagen = 'https://mario.nintendo.com/static/43a96c1d5b681d338864aac15cd391b9/f3703/peach.png';
          break;
        case 3:
          imagen = 'https://mario.nintendo.com/static/e3ebf11b069067da929b608250baa44e/55d59/toad.png';
          break;
        default:

      }
      this.piezas.push({imagen: imagen, descubierta: false, seleccionada: false,});
    });

  }



  validar(){
 let selec = this.piezas.filter(x=> x.seleccionada);
    if(selec.length == 2){
      selec[0].seleccionada = false;
      selec[1].seleccionada = false;
      selec[0].seleccionada = selec[1].imagen == selec[0].imagen;
      selec[1].seleccionada = selec[1].imagen == selec[0].imagen;

  };

}}