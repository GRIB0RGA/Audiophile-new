import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/interfaces/shop-data.models';

@Pipe({
  name: 'getCategoryItems',
})
export class GetCategoryItemsPipe implements PipeTransform {
  //prettier-ignore
  transform(productArr: Product[] | undefined, type: string): Product[] | undefined {
    if (!productArr) {
      return
    }
    return productArr.filter((product:Product)=>product.category===type);
  }
}
