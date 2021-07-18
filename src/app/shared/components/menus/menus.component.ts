import { LoadingService } from 'src/app/shared/services/loading.service';
import { Component, OnInit } from '@angular/core';
import { IMenuIFrame, MenuMap, MenuPage } from './menu-frame';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public provinces: IMenuIFrame[] = MenuMap;
  public pages: IMenuIFrame[] = MenuPage;

  constructor(
    public loading: LoadingService
  ) { }

  ngOnInit(): void {
    
  }

  public spin() {
    this.loading.on();
    setTimeout(() => {
      this.loading.off();
    }, 2000);
  }
}
