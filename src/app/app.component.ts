import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

export const STORAGE_KEY = `cart`;

const localSt = [
  {
    id: 1,
    name: 'XX99 Mark II Headphones',
    price: 2999,
    quantity: 1,
    image:
      '/src/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
  },
  {
    id: 2,
    name: 'ZX9 Speaker',
    price: 4500,
    quantity: 2,
    image: '/src/assets/product-zx9-speaker/desktop/image-product.jpg',
  },
];
const updateStorage = (key: string, storageObj: any) => {
  localStorage.setItem(key, JSON.stringify(storageObj));
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Audiophile';

  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    updateStorage(STORAGE_KEY, this.setLocalStorageIfEmpty());
  }

  setLocalStorageIfEmpty() {
    return this.storageService.get(STORAGE_KEY)
      ? this.storageService.get(STORAGE_KEY)
      : localSt;
  }
}
