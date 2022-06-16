import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: any = 'Nombre';
  modificado: any = false;
  cssTitleClass: string = '';
  op1: number = 0;
  op2: number = 0;
  resultado: any;
  cssClassResult: string = '';
  products: any = [
    {
      id: 1,
      name: 'moto g',
    },
    {
      id: 2,
      name: 'moto x',
    },
  ];

  constructor() {
    let title2 = '';
  }
  cambiarTitle() {
    this.title = '';
    this.modificado = true;
    this.cssTitleClass = 'error';
  }
  calcular() {
    this.resultado = this.op1 + this.op2;
    if (this.resultado > 0) {
      this.cssClassResult = 'ok';
    } else {
      this.cssClassResult = 'error';
    }
  }
  changeProducts() {
    this.products = [
      {
        id: 3,
        name: 'iPhone 12',
      },
    ];
  }
  ngOnInit(): void {}
}
