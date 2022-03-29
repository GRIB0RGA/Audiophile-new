import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/models/interfaces/cart-item.models';

@Pipe({
  name: 'totalPriceCalculator',
})
export class TotalPricePipe implements PipeTransform {
  transform(value: Item[] | undefined): string {
    if (!value) {
      return '0';
    }
    //prettier-ignore
    return value
      .reduce((accum: number, item: Item) => accum + item.quantity * item.price,0)
      .toLocaleString();
  }
}
