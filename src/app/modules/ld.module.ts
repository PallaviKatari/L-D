import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { LdRoutingModule } from './ld-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeComponent } from './home/home.component';
import { BufferDetailsComponent } from './buffer-details/buffer-details.component';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    HomeComponent,
    BufferDetailsComponent,
  ],
  imports: [
    CommonModule,
    LdRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule,
    HttpClientModule,
    AccordionModule,
    TooltipModule,
    CalendarModule,
    TableModule,
    MultiSelectModule,
    DropdownModule
  ],
  providers: [PaginationConfig, DatePipe]
})
export class LdModule { }
