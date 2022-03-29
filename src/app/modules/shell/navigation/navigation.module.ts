import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationDropdownMenuComponent } from './navigation-dropdown-menu/navigation-dropdown-menu.component';
import { NavigationCartModalComponent } from './navigation-cart-modal/navigation-cart-modal.component';
import { NavigationCartItemComponent } from './navigation-cart-modal/navigation-cart-item/navigation-cart-item.component';
import { FormsModule } from '@angular/forms';
import { TotalPricePipe } from '../../shared/pipes/total-price.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    // SharedModule,
    NavigationComponent,
    NavigationDropdownMenuComponent,
    NavigationCartModalComponent,
    NavigationCartItemComponent,
    TotalPricePipe,
  ],
  imports: [CommonModule, FormsModule,SharedModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
