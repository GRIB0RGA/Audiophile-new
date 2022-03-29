import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navigation-cart-item',
  templateUrl: './navigation-cart-item.component.html',
  styleUrls: ['./navigation-cart-item.component.scss'],
})
export class NavigationCartItemComponent implements OnInit {
  @Input() cartItem: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onPlusMinusClick(id: number, type: string) {
    this.cartService.updateItemQuantity(id, type);
  }
}
