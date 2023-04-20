import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Content-Type': 'application/json; charset=utf-8',
    withCredentials: 'true',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class LdService {
  private API = environment.apiUrl;
  constructor(private http: HttpClient) {}
  get<T>(obj: any): Observable<any> {
    return this.http.post<any>(
      this.API + 'Common/GetDropDownList',
      obj,
      httpOptions
    );
  }

  CheckDb(request: any): Observable<any> {
    return this.http.post<any>(
      this.API + 'Common/GetDropDownList',
      request,
      httpOptions
    );
  }

  getDB(): Observable<any> {
    return this.http.post<any>(
      this.API + 'Common/GetDropDownList',
      httpOptions
    );
  }

}
