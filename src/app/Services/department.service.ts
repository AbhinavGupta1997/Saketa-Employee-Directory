import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../Models/department.model';
import { AuthOService } from './auth-o.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly APIUrl = "https://localhost:6001/api";
  
  accessToken = this.authService.accessToken;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken 
    })
  };

  constructor(private http: HttpClient, private authService: AuthOService) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + '/Department', this.httpOptions);
  }

  getDepartmentById(id: number): Observable<string> {
    const url = `${this.APIUrl}/Department/${id}`;
    return this.http.get<string>(url, this.httpOptions);
  }

  getDepartmentCount(): Observable<number> {
    const url = `${this.APIUrl}/Department/GetDepartmentCount/1`;
    return this.http.get<number>(url);
  }
}
