import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  readonly APIUrl = "https://localhost:5001/api/authenticate";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  AuthenticateUser(credentials: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + '/login', credentials, this.httpOptions);
  }

  AddUser(credentials: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + '/register', credentials, this.httpOptions);
  }
}
