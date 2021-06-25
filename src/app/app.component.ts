import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthOService } from './Services/auth-o.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  token = this.authService.token;

  constructor(private authService: AuthOService, private http: HttpClient){
    this.configureSingleSignOn();
  }

  ngOnInit() {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.authService.configureSingleSignOn();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}