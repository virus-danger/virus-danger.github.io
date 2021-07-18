import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './components/menus/menus.component';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from './pipes/safe-html.pipe';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MenusComponent,
    SafeUrlPipe,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    MenusComponent,
    LoadingComponent,
    SafeUrlPipe,
  ]
})
export class SharedModule { }
