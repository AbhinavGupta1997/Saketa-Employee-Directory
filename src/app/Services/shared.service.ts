import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  employees: Employee[] = [];

  getEmployeeList(): Observable<Employee[]> {
    // this.employees = this.http.get<any>(this.APIUrl+'/Employee');
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  getDepartmentCount(): Observable<number> {
    return this.http.get<number>(this.APIUrl+'/Department/GetDepartmentCount/1');
  }

  // getDepartmentCount(id: number): Observable<any> {
  //   return this.http.get<any>(this.APIUrl+'/Employee/GetDepartmentCount/'+id);
  // }
}
