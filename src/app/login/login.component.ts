import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../Services/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin!: boolean;

  constructor(private router: Router, private authenticateService: LoginRegisterService) { }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);

    this.authenticateService.AuthenticateUser(credentials)
      .subscribe(response => {
        const token = (<any>response).Token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/"]);
      }, err => {
        this.invalidLogin = true;
      });

    //this.http.post("http://localhost:5000/api/authenticate/login", credentials, {
    //  headers: new HttpHeaders({
    //    "Content-Type": "application/json"
    //  })
    //}).subscribe(response => {
    //  const token = (<any>response).Token;
    //  localStorage.setItem("jwt", token);
    //  this.invalidLogin = false;
    //  this.router.navigate(["/"]);
    //}, err => {
    //  this.invalidLogin = true;
    //});
  }

  ngOnInit(): void {
  }

}
