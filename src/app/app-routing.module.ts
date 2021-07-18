import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeComponent } from './components/iframe/iframe.component';
import { MapIframeComponent } from './components/map-iframe/map-iframe.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapIframeComponent,
  },
  {
    path: 'page',
    component: IframeComponent,
  },
  {
    path: '**',
    redirectTo: '/map?code=home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
