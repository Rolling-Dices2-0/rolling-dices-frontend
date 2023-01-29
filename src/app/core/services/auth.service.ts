import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authenticated: boolean = false;

  constructor() { }


  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token(): string {
    return localStorage.getItem('token') ?? '';
  }

  check(): Observable<boolean> {

    if (this._authenticated) {
      return of(true);
    }

    if (!this.token) {
      return of(false);
    }

    return of(true);
  }
}
