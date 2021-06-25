import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthOService } from './auth-o.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private http: HttpClient, private authService: AuthOService) { }

  private APIUrl = 'https://localhost:5001/account/privacy';
  private url = 'https://localhost:5001/UserProfile'
  private claimsUrl = 'https://localhost:6001/api/Employee/Privacy'
  accessToken = this.authService.accessToken;
  idToken = this.authService.idToken;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken 
    })
  };

  // claims = this.getUserClaims();

  getUserClaims() {
    // return this.http.get(this.APIUrl, this.httpOptions);
    return this.http.get<any[]>(this.APIUrl, this.httpOptions);
  }

  getUserEmail() {
    return this.http.get<any>(this.url, this.httpOptions)
  }

  getClaims() {
    return this.http.get<any[]>(this.claimsUrl, this.httpOptions);
  }

  urlAddressTest = 'https://localhost:5001'

  public getData = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, this.urlAddressTest), this.httpOptions);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
