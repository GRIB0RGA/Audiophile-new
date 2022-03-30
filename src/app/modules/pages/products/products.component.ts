import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/interfaces/shop-data.models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  currentProduct: Product | undefined;

  constructor(
    private dataService: DataService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // let id = this.activeRoute.snapshot.params['id'];
    // this.currentProduct = this.dataService.getCurrentProduct(+id);
    this.activeRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.currentProduct = this.dataService.getCurrentProduct(+id);
    });

    console.log(this.currentProduct);
  }
}
