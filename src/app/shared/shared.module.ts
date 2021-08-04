import { MenusCollapseComponent } from './components/menus/menus-collapse.component';
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
    LoadingComponent,
    MenusCollapseComponent
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
