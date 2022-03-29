import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SectionZigzagProductsComponent } from './section-zigzag-products/section-zigzag-products.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CategoriesComponent, SectionZigzagProductsComponent],
  imports: [CommonModule, CategoriesRoutingModule, SharedModule],
})
export class CategoriesModule {}
