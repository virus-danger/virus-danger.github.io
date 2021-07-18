import { IMenuIFrame, MenuPage } from './../../shared/components/menus/menu-frame';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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