import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: '',
  }
  
  constructor(private _auth: AuthService, private _router: Router) { }


  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          if(res.token){
            console.log(res.token)
            sessionStorage.setItem('token', res.token)
            this._router.navigate(['/home'])
          }else{
            this._router.navigate(['/login'])

          }
          // console.log(res)
        },
        err => {
          console.log(err)
          this._router.navigate(['/register'])
        }
      )
  }

}
