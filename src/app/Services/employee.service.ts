import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Models/employee.model';
import { AuthOService } from './auth-o.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Subject<string> = new Subject();

  employees = new Subject<Employee[]>();

  private APIUrl = 'https://localhost:6001/api';
  accessToken = this.authService.accessToken;
  idToken = this.authService.idToken;
  claims = this.authService.getIdentityClaims();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken 
    })
  };

  getEmployees(): Observable<Employee[]> {
    // var reqHeader = new HttpHeaders({ 
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + this.accessToken
    //  });
    return this.http.get<Employee[]>(this.APIUrl + '/Employee', this.httpOptions);
    // return this.http.get<Employee[]>(this.APIUrl + '/Employee', { headers: reqHeader });
  }

  constructor(private http: HttpClient, private authService: AuthOService) { }

  getEmployeeData(employees: Employee[]) {
    this.employees.next(employees);
  }

  updateEmployee(value: Employee[]) {
    this.employees.next(value);
  }

  getEmpData(): Observable<Employee[]> {
    return this.employees.asObservable();
  }

  // getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.APIUrl + '/Employee');
  // }

  // getLoggedInUser(): Observable<any> {
  //   const headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.accessToken}`
  //   })
  //   return this.http.get(this.APIUrl + '/Employee', { headers: headers })
  //   // return this.http.get(apiUrl, { headers: headers })
  // }

  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.APIUrl}/Employee/${id}`;
    return this.http.get<Employee>(url, this.httpOptions);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.APIUrl + '/Employee', employee, this.httpOptions);
  }

  editEmployee(id: number, employee: Employee): Observable<Employee> {
    const url = `${this.APIUrl}/Employee/${id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions);
  }

  // get accessToken() {
  //   return this.oauthService.getAccessToken();
  // }
}
