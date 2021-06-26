import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthOService } from './Services/auth-o.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthOService,
    private oauthService:OAuthService){
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

  get token() {
    let claims:any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}