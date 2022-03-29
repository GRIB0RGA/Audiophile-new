import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

import { STORAGE_KEY } from 'src/app/app.component';
import { StorageService } from 'src/app/services/storage.service';
import { Item } from '../models/interfaces/cart-item.models';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  modalItems: Item[] | undefined = this.storageService.get(STORAGE_KEY);
  //prettier-ignore
  updateCart: BehaviorSubject<Item[]|undefined> = new BehaviorSubject<Item[]|undefined>(this.modalItems);
  updateCart$ = this.updateCart.asObservable();

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  getModalItems(): Item[] | undefined {
    return this.modalItems;
  }

  setModalItems(updatedItems: Item[]) {
    this.storageService.set(STORAGE_KEY, updatedItems);
  }

  removeAllItemsFromCart() {
    this.updateStorageAndObserver([]);
  }

  updateStorageAndObserver(array: Item[]) {
    this.setModalItems(array);
    this.updateCart.next(array);
  }

  updateItemQuantity(id: number, type: string) {
    let modalItemsArr = this.getModalItems();
    if (modalItemsArr) {
      modalItemsArr = modalItemsArr
        .map((item: Item): any => {
          if (item.id === id) {
            return {
              ...item,
              quantity: type === 'plus' ? ++item.quantity : --item.quantity,
            };
          }
          return item;
        })
        .filter((item: Item) => item.quantity > 0);

      this.updateStorageAndObserver(modalItemsArr);
    }
  }
}
