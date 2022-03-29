import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { SectionFeaturedProductsComponent } from './section-featured-products/section-featured-products.component';

@NgModule({
  declarations: [HomeComponent, SectionFeaturedProductsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
