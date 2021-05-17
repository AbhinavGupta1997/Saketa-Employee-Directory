import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee1 } from '../Models/employee1.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeData: Employee[] = JSON.parse(localStorage.getItem("employee")!);
  employee: Subject<string> = new Subject();

  employees = new Subject<Employee[]>();
  // employeees = new Subject<Employee[]>();

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

  getEmployees(): Observable<Employee1[]> {
    return this.http.get<Employee1[]>(this.APIUrl + '/Employee');
  }

  getEmployeeById(id: number): Observable<Employee1> {
    const url = `${this.APIUrl}/Employee/${id}`;
    return this.http.get<Employee1>(url);
  }

  addEmployee(employee: Employee1): Observable<Employee1> {
    return this.http.post<Employee1>(this.APIUrl, employee, this.httpOptions);
  }
}
