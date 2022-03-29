import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HeaderCategoriesComponent } from './header-categories/header-categories.component';

@NgModule({
  declarations: [HeaderHomeComponent, HeaderCategoriesComponent],
  imports: [CommonModule],
  exports: [HeaderHomeComponent, HeaderCategoriesComponent],
})
export class HeaderModule {}
