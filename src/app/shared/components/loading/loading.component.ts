import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Project
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  private subsription: Subscription;

  /**
   * @description Lifecycle
   * @param pushMessage LoadingService
   * @return void
   */
  constructor(private pushMessage: LoadingService) {
    this.subsription = this.pushMessage.loading.subscribe((res) => {
      this.isLoading = res;
    });
  }

  public spinnerStyle = {
    width: '50px',
    height: '50px',
    position: 'fixed',
    margin: 'auto',
    zIndex: '2000',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  /**
   * @description Lifecycle
   * @description Init
   * @return void
   */
  ngOnInit(): void { }

  /**
   * @description Lifecycle
   * @description Destroy
   * @return void
   */
  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}