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

  // departments: Department[] = [];

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + '/Department');
  }

  getDepartmentCount(id: number): Observable<number> {
    const url = `${this.APIUrl}/Department/GetDepartmentCount/${id}`;
    return this.http.get<number>(url);
  }

  // getDepartmentCount(): Observable<number> {
  //   return this.http.get<number>(this.APIUrl + '/Department/GetDepartmentCount/1')
  // }
}
