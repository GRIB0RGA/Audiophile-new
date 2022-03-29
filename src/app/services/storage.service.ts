import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';   

@Injectable({
  providedIn: 'root',
})
export class StorageService {
 
  get<T>(key: string): T | undefined {
    const storageObj = localStorage.getItem(key);

    if (!storageObj) {
      return;
    }

    return JSON.parse(storageObj);
  }

  set<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
