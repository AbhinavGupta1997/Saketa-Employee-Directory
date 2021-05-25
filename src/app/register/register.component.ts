import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../Services/login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private authenticationService: LoginRegisterService) { }

  public register = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);

    this.authenticationService.AddUser(credentials).subscribe();

    //this.http.post("http://localhost:5000/api/authenticate/register", credentials, {
    //  headers: new HttpHeaders({
    //    "Content-Type": "application/json"
    //  })
    //}).subscribe();
    //  .subscribe(response => {
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
