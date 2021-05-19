import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Subject<string> = new Subject();

  employees = new Subject<Employee[]>();

  private APIUrl = 'https://localhost:5001/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEmployeeData(employees: Employee[]) {
    this.employees.next(employees);
  }

  updateEmployee(value: Employee[]) {
    this.employees.next(value);
  }

  getEmpData(): Observable<Employee[]> {
    return this.employees.asObservable();
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.APIUrl + '/Employee');
  }

  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.APIUrl}/Employee/${id}`;
    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.APIUrl + '/Employee', employee, this.httpOptions);
  }

  editEmployee(id: number, employee: Employee): Observable<Employee> {
    const url = `${this.APIUrl}/Employee/${id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions);
  }
}
