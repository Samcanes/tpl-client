import { Component, OnInit } from '@angular/core';
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

  constructor(private _auth: AuthService) { }


  ngOnInit(): void {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
