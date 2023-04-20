import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu/vertical-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    VerticalMenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
  ]
})
export class LayoutModule { }
