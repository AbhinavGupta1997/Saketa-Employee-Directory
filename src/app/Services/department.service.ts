import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../Models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + '/Department');
  }

  getDepartmentById(id: number): Observable<string> {
    const url = `${this.APIUrl}/Department/${id}`;
    return this.http.get<string>(url);
  }

  getDepartmentCount(): Observable<number> {
    const url = `${this.APIUrl}/Department/GetDepartmentCount/1`;
    // const url = `${this.APIUrl}/Department/GetDepartmentCount/${id}`;
    return this.http.get<number>(url);
  }
}
