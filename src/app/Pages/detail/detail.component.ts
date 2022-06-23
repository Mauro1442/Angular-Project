import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  product: any;
  isLoading: boolean = true;
  isError: boolean | string = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productsService
      .getById(id)
      .then((data: {}) => {
        this.product = data;
        this.isError = false;
      })
      .catch((error: string) => {
        console.log(error);
        this.isError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  ngOnInit(): void {}
}
