import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './shared/components/menus/menus.component';
import { SharedModule } from './shared/shared.module';
import { MapIframeComponent } from './components/map-iframe/map-iframe.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { HomeComponent } from './components/home/home.component';
import { MenusCollapseComponent } from './shared/components/menus/menus-collapse.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MapIframeComponent,
    IframeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenusComponent, MenusCollapseComponent, FooterComponent]
})
export class AppModule { }
