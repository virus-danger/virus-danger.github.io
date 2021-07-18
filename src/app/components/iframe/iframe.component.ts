import { IMenuIFrame, MenuPage } from './../../shared/components/menus/menu-frame';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  public params: Params;
  public url: IMenuIFrame | undefined;
  public urls: IMenuIFrame[] = MenuPage;

  constructor(
    private aRoute: ActivatedRoute,
  ) {
    this.aRoute.queryParams.subscribe(params => {
      if (params) {
        this.params = params;
        const url = this.urls.find((f: IMenuIFrame) => f.state_code === params['code']);
        this.url = url ? url : this.urls[0];
      }
    });
  }

  ngOnInit(): void {
  }
}