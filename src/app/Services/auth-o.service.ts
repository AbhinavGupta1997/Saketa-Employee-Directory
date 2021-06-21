import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from '../Configs/auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthOService {

  constructor(private http: HttpClient, private oauthService:OAuthService){
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout(){
    this.oauthService.logOut();
  }

  getIdentityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  get token(){
    let claims:any = this.getIdentityClaims();
    return claims ? claims : null;
  }

  get accessToken() {
    return this.oauthService.getAccessToken();
  }

  get idToken() {
    return this.oauthService.getIdToken();
  }
}
