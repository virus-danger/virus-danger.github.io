import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  public loading = new BehaviorSubject(false); // Default value: false

  /**
   * @description Lifecycle
   * @return void
   */
  constructor() { }

  // ==============
  // LOADING ...
  // ==============

  /**
   * @description On loading
   * @return void
   */
  public on(): void {
    this.loading.next(true);
  }

  /**
   * @description Off loading
   * @return void
   */
  public off(): void {
    this.loading.next(false);
  }
}