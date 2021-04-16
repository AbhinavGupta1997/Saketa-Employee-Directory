import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeData: Employee[] = JSON.parse(localStorage.getItem("employee")!);
  selectedEmployee: Employee = {id: "", firstName: "", lastName: "", preferredName: "", email: "",
  jobTitle: "", department: "", office: "", phoneNumber: "", skypeId: ""};

  private _employeeService = new Subject<Employee[]>();
  empData = this._employeeService.asObservable();

  constructor() { }

  getEmployeeData(employees: Employee[]) {
    this._employeeService.next(employees) 
  }

}
