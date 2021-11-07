import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',

  }

  constructor(private _auth: AuthService, private _router: Router) { }


  ngOnInit(): void {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res.token)
          sessionStorage.setItem('token', res.token)
          this._router.navigate(['/home'])
          // console.log(res)
        },
        err => console.log(err)
      )
  }

}
