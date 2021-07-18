import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private router: Router,
    private aRoute: ActivatedRoute,
  ) {
    this.aRoute.params.subscribe(params => {
      if (params) {
        this.params = params;
        const url = this.urls.find((f: IMenuIFrame) => f.state_code === params['code']);
        if (url) {
          this.url = url;
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }

  ngOnInit(): void {
  }
}