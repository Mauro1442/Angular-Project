import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: any = 'Nombre';
  modificado: any = false;
  constructor() {
    let title2 = '';
  }
  cambiarTitle() {
    this.title = '';
    this.modificado = true;
  }
  ngOnInit(): void {}
}
