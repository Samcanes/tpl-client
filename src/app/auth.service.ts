import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerURL = 'https://tpl-server.herokuapp.com/api/signup'

  private _loginUrl = 'https://tpl-server.herokuapp.com/api/signin'
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerURL, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
}
