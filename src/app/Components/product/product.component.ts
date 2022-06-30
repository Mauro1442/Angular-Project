import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/interfaces/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  data!: Product;
  constructor() {}

  ngOnInit(): void {}
}
