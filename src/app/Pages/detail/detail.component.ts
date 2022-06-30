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

    this.init(id);
  }

  async init(id: any) {
    try {
      const product = await this.productsService.getById(id);
      const description = await this.productsService.getDescriptionById(id);
      this.product = { ...product, ...description };
      this.isLoading = false;
      this.isError = false;
    } catch (e) {
      console.log(e);
      this.isLoading = false;
      this.isError = true;
    }
  }
  ngOnInit(): void {}
}
