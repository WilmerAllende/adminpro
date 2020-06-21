import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres()
      .then((mensaje) => console.log('TERMINO!!! ', mensaje))
      .catch((error) => console.error('Ocurrio un error: ', error));
  }

  ngOnInit(): void {}

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;

      let itervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(itervalo);
        }
      }, 1000);
    });
  }
}
