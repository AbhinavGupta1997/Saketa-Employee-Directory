// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'Saketa-Employee-Directory';
// }

import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from './Configs/auth.config'
import { filter } from 'minimatch';
import { Router } from '@angular/router';
import { authCodeFlowConfig } from './Configs/authCodeFlow.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Http, Headers, Response } from '@angular/http'
import { Employee } from './Models/employee.model';
import { Department } from './Models/department.model';
import { AuthOService } from './Services/auth-o.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // userName: string = null;
  // employeeCount!: number;
  private APIUrl = 'https://localhost:6001/api';

  // constructor(private http: HttpClient, private oauthService:OAuthService){
  //   this.configureSingleSignOn();
  // }

  constructor(private authService: AuthOService, private http: HttpClient){
    this.configureSingleSignOn();
  }

  claims1: any;
  accessToken1: any;
  token1: any;

  ngOnInit() {
    this.configureSingleSignOn();
    this.accessToken1 = this.authService.accessToken;
    this.token1 = this.authService.token;
  }

  configureSingleSignOn() {
    this.authService.configureSingleSignOn();
  }

  getUserProfile() {
    this.authService.getUserProfile();
  }

  // userProfileInfo = this.authService.getUserProfile();

  claims = this.authService.getIdentityClaims();
  // claimsSub = this.claims

  // configureSingleSignOn(){
  //   this.oauthService.configure(authConfig);
  //   // this.oauthService.configure(authCodeFlowConfig);
  //   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  //   // this.oauthService.loadDiscoveryDocumentAndLogin().then(_ => {
  //   //   const claims = this.oauthService.getIdentityClaims();
  //   //   // this.userName = claims['given_name'];
  //   //   this.queryApi();
  //   // });
  //   // console.log(this.employeeCount);
  // }

  // queryApi() {
  //   const url = 'https://localhost:6001/api/Employee';
  //   this.http.get<unknown[]>(url).subscribe({
  //     next: employees => this.employeeCount = employees.length,
  //     error: err => console.error('err', err)
  //   });
  // }

  login() {
    this.authService.login();
  }

  // login(){
  //   // this.oauthService.initImplicitFlow();
  //   // this.oauthService.initCodeFlow();
  //   this.oauthService.initLoginFlow();
  //   // this.router.navigate(["/"]);
  // }

  logout() {
    this.authService.logout();
  }

  register() {

  }
  
  // logout(){
  //   this.oauthService.logOut();
  // }

  token = this.authService.token;

  // get token(){
  //   let claims:any = this.authService.getIdentityClaims();
  //   return claims ? claims : null;
  // }
  // get token(){
  //   let claims:any = this.oauthService.getIdentityClaims();
  //   return claims ? claims : null;
  // }

  accessToken = this.authService.accessToken;

  // get accessToken() {
  //   return this.oauthService.getAccessToken();
  // }

  // get refreshToken() {
  //   return this.oauthService.getRefreshToken();
  // }

  // get idToken() {
  //   return this.oauthService.getIdToken();
  // }

  // getLoggedInUser(): Observable<any> {
  //   const headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.accessToken}`
  //   })
  //   return this.http.get(this.APIUrl + '/Employee', { headers: headers })
  //   // return this.http.get(apiUrl, { headers: headers })
  // }

  // getEmployees(){
  //   var reqHeader = new HttpHeaders({ 
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + this.accessToken
  //    });
  //   return this.http.get<Employee[]>(this.APIUrl + '/Employee', { headers: reqHeader });
  // }

  // getDepartments(){
  //   var reqHeader = new HttpHeaders({ 
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + this.accessToken
  //    });
  //   return this.http.get<Department[]>(this.APIUrl + '/Department', { headers: reqHeader });
  // }

  // getEmployees(){
  //   var reqHeader = new HttpHeaders({ 
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + this.accessToken
  //    });
  //   return this.http.get<Employee[]>(this.APIUrl + '/Employee', { headers: reqHeader });
  // }

  // getEmployees(){
  //   var reqHeader = new HttpHeaders({ 
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + this.accessToken
  //    });
  //   return this.http.get<Employee[]>(this.APIUrl + '/Employee', { headers: reqHeader });
  // }

}