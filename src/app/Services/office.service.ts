import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Office } from '../Models/office.model';
import { AuthOService } from './auth-o.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient, private authService: AuthOService) { }

  readonly APIUrl = "https://localhost:6001/api";
  accessToken = this.authService.accessToken;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken 
    })
  };

  getOffices(): Observable<Office[]> {
    return this.http.get<Office[]>(this.APIUrl + '/Office', this.httpOptions);
  }

  getOfficeById(id: number): Observable<Office> {
    const url = `${this.APIUrl}/Office/${id}`;
    return this.http.get<Office>(url, this.httpOptions);
  }

  getOfficeCount(id: number): Observable<number> {
    const url = `${this.APIUrl}/Office/GetOfficeCount/${id}`;
    return this.http.get<number>(url);
  }
}
