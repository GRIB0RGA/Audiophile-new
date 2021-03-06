import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  
  @ViewChild('itemsInCart') cartCircle: ElementRef | undefined;

  count: number | undefined;

  navigationButtonType: string = '';
  overlayIsOn = false;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.updateCart$.subscribe((data) => {
      this.count = data?.length;
    });
  }

  onNavigationButtonClick(type: any) {
    if (this.navigationButtonType === type) {
      this.navigationButtonType = '';
      this.overlayIsOn = false;
    } else {
      this.navigationButtonType = type;
      this.overlayIsOn = true;
    }
  }

  changePage(li: HTMLLIElement) {
    const pageName = li.innerHTML.toLowerCase();
    console.log(pageName);
    if (pageName === 'home') {
      this.router.navigate([``]);
    } else {
      this.router.navigate([`categories/${pageName}`]);
    }
  }

  openModal() {}
  //   this.overlayStatus.next(this.overlayIsOn);
  // }

  // updateItemsInCartCircle(itemsInCart: number) {
  //   this.count = itemsInCart;
  // }

  // onListItemClick(link: any) {
  //   const clickedLink = link.target.innerText;
  //   this.clieckedPage.next(clickedLink);
  //   window.scrollTo(0, 0);
  // }
}
