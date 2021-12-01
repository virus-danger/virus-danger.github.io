import { MenusCollapseComponent } from './components/menus/menus-collapse.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './components/menus/menus.component';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from './pipes/safe-html.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { PcCovidModalComponent } from './components/pc-covid-modal/pc-covid-modal.component';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';

@NgModule({
  declarations: [
    MenusComponent,
    SafeUrlPipe,
    LoadingComponent,
    MenusCollapseComponent,
    CopyrightComponent,
    PcCovidModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxQrcodeStylingModule
  ],
  exports: [
    MenusComponent,
    LoadingComponent,
    SafeUrlPipe,
    CopyrightComponent,
    PcCovidModalComponent
  ]
})
export class SharedModule { }
