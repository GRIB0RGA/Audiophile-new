import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/interfaces/cart-item.models';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navigation-cart-modal',
  templateUrl: './navigation-cart-modal.component.html',
  styleUrls: ['./navigation-cart-modal.component.scss'],
})
export class NavigationCartModalComponent implements OnInit {


  

  constructor(private cartService: CartService) {}

  modalItems: Item[] | undefined;

  ngOnInit(): void {
    this.cartService.updateCart$.subscribe((data) => {
      this.modalItems = data;
    });
  }

  removeAll() {
    this.cartService.removeAllItemsFromCart();
  }

  
  // aq xoar movayomaro +- ic
}
