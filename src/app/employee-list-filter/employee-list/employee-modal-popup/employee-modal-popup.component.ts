import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../../../Models/employee.model';

@Component({
  selector: 'app-employee-modal-popup',
  templateUrl: './employee-modal-popup.component.html',
  styleUrls: ['./employee-modal-popup.component.scss']
})
export class EmployeeModalPopupComponent implements OnInit {

  @Input() employeeId: string = '';

  @Output() displayStatusEvent: EventEmitter<boolean> = new EventEmitter();

  editBtnStatus = false;

  empData: Employee[] =[];
  employee: any;

  constructor() { }

  ngOnInit() {
    this.empData = JSON.parse(localStorage.getItem("employee")!); 
    this.employee = this.empData.filter((employee: Employee) => {
    return employee.id === this.employeeId;
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