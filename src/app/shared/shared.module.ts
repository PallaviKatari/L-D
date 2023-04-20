import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader/loader.component';

import { BlockUIModule } from 'primeng/blockui';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule,
    BlockUIModule,
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
