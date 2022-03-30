import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAboutComponent } from './sections/section-about/section-about.component';
import { SectionCategoriesComponent } from './sections/section-categories/section-categories.component';

import { HeaderModule } from './header/header.module';
import { GetCategoryItemsPipe } from './pipes/get-category-items.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    SectionAboutComponent,
    SectionCategoriesComponent,
    GetCategoryItemsPipe,
    OverlayComponent,
  ],
  imports: [CommonModule, HeaderModule, ConfirmDialogModule],
  exports: [
    SectionAboutComponent,
    SectionCategoriesComponent,
    HeaderModule,
    GetCategoryItemsPipe,
    ConfirmDialogModule,
    OverlayComponent,
  ],
  providers: [ConfirmationService],
})
export class SharedModule {}
