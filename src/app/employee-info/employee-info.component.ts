import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  @Input() employeeId: string = '';

  @Output() displayStatusEvent: EventEmitter<boolean> = new EventEmitter();

  editBtnStatus = false;

  empData: Employee[] =[];
  employee: any;

  constructor() { }

  ngOnInit() {
    this.empData = JSON.parse(localStorage.getItem("employee")!); 
    this.employee = this.empData.filter((employee: Employee) => {
    return employee.id == this.employeeId;
  })[0];
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