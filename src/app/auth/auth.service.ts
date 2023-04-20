import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './auth.model';
import { environment } from 'src/environments/environment';
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
export class AuthService {
  //#region Variables
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private refreshTokenTimeout?: NodeJS.Timeout;
  //#endregion

  //#region Constructor
  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }
  //#endregion

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(login: any) {
    return this.http
      .post<User>(`${environment.apiUrl}Authentication/authenticate`, login, httpOptions)
      .pipe(
        map((user) => {
          if (user.succeeded) {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            this.startRefreshTokenTimer();
          }
          return user;
        })
      );
  }

  refresh() {
    let jwtBase: any = (localStorage.getItem('user'));
    let data: any = JSON.parse(jwtBase);
    let datas: any = (data.data);
    let request = {
      "accessToken": datas.token,
      "token": datas.refreshToken,
      "dbName": datas.dbName
    }
    localStorage.removeItem('user')
    return this.http.post<User>(environment.apiUrl + 'Authentication/GetRefreshToken', request, httpOptions).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return user;
      })
    )
  }

  startRefreshTokenTimer() {
    var currentDateTime: any = new Date();
    let jwtBase: any = (localStorage.getItem('user'));
    let data: any = JSON.parse(jwtBase);
    var expTime: any = (data.data.tokenExpiryTime);
    var expDateTime: any = new Date(expTime);
    var diff = (expDateTime.getTime() - currentDateTime.getTime()) / (1000 * 60);
    var timeDifferencest = diff.toString();
    var timeDifference = timeDifferencest.split(".", 3);
    var duration = ((parseInt(timeDifference[0]) - 10) * 60000);
    this.refreshTokenTimeout = setInterval(() => {
      this.refresh().subscribe();
    }, duration);
  }

  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  logout() {
    let data: any = localStorage.getItem('user');
    let db: any = JSON.parse(data)
    this.stopRefreshTokenTimer();
    let logout = {
      "dbName": db.data.dbName,
      "token": db.data.refreshToken
    }
    return this.http
      .post<any>(`${environment.apiUrl}Authentication/RevokeToken`, logout, httpOptions)
      .pipe(
        map((res) => {
          if (res.succeeded === true) {
            localStorage.removeItem('user');
            this.userSubject.next(null!);
            this.router.navigate(['/auth']);
          }
          return res;
        })
      );
  }
}
