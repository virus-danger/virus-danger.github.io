import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMenuIFrame, MenuMap } from 'src/app/shared/components/menus/menu-frame';


@Component({
  selector: 'app-map-iframe',
  templateUrl: './map-iframe.component.html',
  styleUrls: ['./map-iframe.component.scss']
})
export class MapIframeComponent implements OnInit {

  public params: Params;
  public url: IMenuIFrame | undefined;
  public urls: IMenuIFrame[] = MenuMap;

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