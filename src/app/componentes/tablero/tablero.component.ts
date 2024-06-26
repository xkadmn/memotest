
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
  public cartasSeleccionadas: Pieza[] = [];
  public puntaje: number = 0;
  public mostrarFelicitaciones: boolean = false; // Variable para controlar la visibilidad de las felicitaciones



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
          imagen = 'https://mario.nintendo.com/static/7204f288e3e823a8203c445fb6cc0d7e/b1656/bowser.png';
          break;
        case 1:
          imagen = 'https://mario.nintendo.com/static/850b7938ec9df2a77921738a12857e88/c4ba3/yoshi.png';
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
  piezaClick(pieza: Pieza) {
    if (!pieza.descubierta && !pieza.seleccionada && this.cartasSeleccionadas.length < 2) {
      pieza.descubierta = true;
      this.cartasSeleccionadas.push(pieza);

      if (this.cartasSeleccionadas.length === 2) {
        setTimeout(() => {
          this.validar();
        }, 500);
      }
    }
  }


  validar() {
    const [pieza1, pieza2] = this.cartasSeleccionadas;

    if (pieza1.imagen === pieza2.imagen) {
      pieza1.descubierta = true;
      pieza2.descubierta = true;
      this.puntaje++; // Incrementar el puntaje 
    } else {
      pieza1.descubierta = false;
      pieza2.descubierta = false;
    }

    this.cartasSeleccionadas = [];
  }

  reiniciarJuego() {
    this.piezas.forEach(pieza => {
      pieza.descubierta = false;
      pieza.seleccionada = false;
    });
  
    this.cartasSeleccionadas = [];
    this.puntaje = 0;
    
  }

}