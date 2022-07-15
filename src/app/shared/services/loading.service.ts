import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public static loading: any;
  constructor() {
    this.init();

  }

  async init() {
  }
}
