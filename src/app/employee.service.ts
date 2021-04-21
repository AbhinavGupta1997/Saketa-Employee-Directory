import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeData: Employee[] = JSON.parse(localStorage.getItem("employee")!);
  employee: Subject<string> = new Subject();

  employees = new Subject<Employee[]>();

  constructor() { }

  getEmployeeData(employees: Employee[]) {
    this.employees.next(employees);
  }

  updateEmployee(value: Employee[]) {
    this.employees.next(value);
  }

  getEmpData(): Observable<Employee[]> {
    return this.employees.asObservable();
  }
}
