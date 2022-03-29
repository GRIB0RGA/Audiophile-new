import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'categories/:category',
    loadChildren: () =>
      import('./modules/pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./modules/pages/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
