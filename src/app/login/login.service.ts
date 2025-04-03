import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _connect = false;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = `username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(password)}`;

    return this.http
      .post('http://localhost:8080/login', body, { headers })
      .pipe(
        tap(() => {
          this._connect = true;
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:8080/logout', {});
  }

  get connect() {
    return this._connect;
  }
}
