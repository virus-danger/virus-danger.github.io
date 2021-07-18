import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './shared/components/menus/menus.component';
import { SharedModule } from './shared/shared.module';
import { MapIframeComponent } from './components/map-iframe/map-iframe.component';
import { IframeComponent } from './components/iframe/iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    MapIframeComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenusComponent]
})
export class AppModule { }
