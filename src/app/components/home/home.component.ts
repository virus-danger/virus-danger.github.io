import { Component, OnInit } from '@angular/core';
import { IMenuIFrame, MenuPage } from 'src/app/shared/components/menus/menu-frame';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public url: IMenuIFrame = MenuPage[0];
  
  constructor() { }

  ngOnInit(): void {
  }

}
