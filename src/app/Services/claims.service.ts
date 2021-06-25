import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthOService } from './auth-o.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private http: HttpClient, private authService: AuthOService) { }

  private claimsUrl = 'https://localhost:6001/api/Employee/Privacy'
  accessToken = this.authService.accessToken;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken 
    })
  };

  getClaims() {
    return this.http.get<any[]>(this.claimsUrl, this.httpOptions);
  }
}
