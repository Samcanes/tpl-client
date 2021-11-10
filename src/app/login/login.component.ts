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

  loginStatus: number = 0;
  
  constructor(private _auth: AuthService, private _router: Router) { }


  ngOnInit(): void {
  }

  loginUser() {
    this.loginStatus = 1
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          console.log(res.status)
          if(res){
            this.loginStatus = 2
          }
          if(res.token){
            console.log(res)
            sessionStorage.setItem('token', res.token)
            // sessionStorage.setItem('loggedIn', "1")
            this._router.navigate(['/home'])
          }else{
            this._router.navigate(['/login'])
          }
          // console.log(res)
        },
        err => {
          this.loginStatus = 2
          console.log(err)
          // this._router.navigate(['/register'])
        }
      )
  }

}
