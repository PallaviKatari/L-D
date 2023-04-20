import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader'

import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

import {LoaderService} from './loader/loader.service';
import { finalize } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor  {


  constructor(private loader: LoaderService, private ngxLoader: NgxUiLoaderService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.ngxLoader.start();
    return next.handle(req).pipe(
      finalize(() =>{
      this.ngxLoader.stop()})
    );

  }
}