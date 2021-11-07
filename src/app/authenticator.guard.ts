import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) { }


  canActivate(): boolean{
    if(this._auth.loggedIn()){
      console.log("U have token")
      return true
    } else {
      console.log("no token next up")
      this._router.navigate(['/login'])
      return false
    }
  }

}
