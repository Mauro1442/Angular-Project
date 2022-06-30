import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/interfaces/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  search: string = 'binoculars';

  constructor(private productsService: ProductsService) {
    this.getAll();
  }

  getAll() {
    this.productsService.getAll(this.search).subscribe({
      next: (data: Product[]) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  handleSearch() {
    this.getAll();
  }

  ngOnInit(): void {}
}
