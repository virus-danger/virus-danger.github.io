import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { MapIframeComponent } from './components/map-iframe/map-iframe.component';

const routes: Routes = [
  {
    path: 'map/:code',
    component: MapIframeComponent,
  },
  {
    path: 'page/:code',
    component: IframeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
