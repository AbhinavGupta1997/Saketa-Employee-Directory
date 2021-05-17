import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employee1 } from 'src/app/Models/employee1.model';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from '../../../Models/employee.model';

@Component({
  selector: 'app-employee-modal-popup',
  templateUrl: './employee-modal-popup.component.html',
  styleUrls: ['./employee-modal-popup.component.scss']
})
export class EmployeeModalPopupComponent implements OnInit {

  @Input() employeeId: number = 0;
  // empId = this.employeeId;

  @Output() displayStatusEvent: EventEmitter<boolean> = new EventEmitter();

  editBtnStatus = false;

  empData: Employee1[] = [];
  employeees: Employee1[] = [];
  employee: any;

  // employee1!: Employee1;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.empData = JSON.parse(localStorage.getItem("employee")!);
    // this.getEmployees();
    this.getEmployee();

    // this.employee = this.empData.filter((employee: Employee1) => {
    // return employee.EmployeeId === this.employeeId;
  // })[0];
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employeees => this.employeees = employeees);
  }

  getEmployee(): void {
    this.employeeService.getEmployeeById(this.employeeId)
    .subscribe(employee => this.employee = employee);
  }

  changeDisplayStatus(value: boolean) {
    this.displayStatusEvent.emit(value);
  }

  changeEditStatus() {
    this.editBtnStatus = true;
  }

  changeStatusFalse(newVal: boolean) {
    this.editBtnStatus = newVal;
  }

}