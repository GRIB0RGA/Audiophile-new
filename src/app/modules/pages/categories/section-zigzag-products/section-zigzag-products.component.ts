import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/interfaces/shop-data.models';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section-zigzag-products',
  templateUrl: './section-zigzag-products.component.html',
  styleUrls: ['./section-zigzag-products.component.scss'],
})
export class SectionZigzagProductsComponent implements OnInit {
  @Input() currentCategory: any;

  products: Product[] | undefined;

  constructor(private dataService: DataService,private router:Router) {}

  ngOnInit(): void {
    this.products = this.dataService.getProductsData();
  }

  goToProductDetails(id: number) {
    console.log(id);
    this.router.navigate([`products/${id}`]);
  }
}
