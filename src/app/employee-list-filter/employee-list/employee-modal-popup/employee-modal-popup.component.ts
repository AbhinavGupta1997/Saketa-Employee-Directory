import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Department } from 'src/app/Models/department.model';
import { Employee } from 'src/app/Models/employee.model';
import { JobTitle } from 'src/app/Models/job-title.model';
import { Office } from 'src/app/Models/office.model';
import { ClaimsService } from 'src/app/Services/claims.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { JobTitleService } from 'src/app/Services/job-title.service';
import { OfficeService } from 'src/app/Services/office.service';

@Component({
  selector: 'app-employee-modal-popup',
  templateUrl: './employee-modal-popup.component.html',
  styleUrls: ['./employee-modal-popup.component.scss']
})
export class EmployeeModalPopupComponent implements OnInit {

  @Input() employeeId: number = 0;

  @Output() displayStatusEvent: EventEmitter<boolean> = new EventEmitter();

  editBtnStatus = false;

  empData: Employee[] = [];
  employeees: Employee[] = [];
  departments: Department[] = [];
  offices: Office[] = [];
  jobTitles: JobTitle[] = [];
  employee!: Employee;
  deptName!: string;
  jobTitleName!: string;
  officeLocation!: string;

  constructor(private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService,
    private claimService: ClaimsService) { }

  ngOnInit() {
    this.getEmployee();
    this.getDepartments();
    this.getJobTitles();
    this.getOffices();
    this.getClaims();
  }

  claims: any[] = [];

  role!: string;

  getClaims(): void {
    this.claimService.getClaims()
    .subscribe(claims => {this.claims = claims;
    this.role = claims[8].value})
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employeees => this.employeees = employeees);
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => {this.departments = departments;
      this.deptName = this.departments.find(department => department.departmentId === this.employee.departmentId)!.departmentName!
      // this.deptName = this.departments.find(department => department.DepartmentId === this.employee.departmentId)!.DepartmentName!
      // this.deptName = this.departments.find(department => department.DepartmentId === this.employee.DepartmentId)!.DepartmentName!
    });
  }

  getJobTitles(): void {
    this.jobTitleService.getJobTitles()
    .subscribe(jobTitles => {this.jobTitles = jobTitles;
      this.jobTitleName = this.jobTitles.find(jobTitle => jobTitle.jobTitleId === this.employee.jobTitleId)?.jobTitleName!
      // this.jobTitleName = this.jobTitles.find(jobTitle => jobTitle.JobTitleId === this.employee.JobTitleId)?.JobTitleName!
    });
  }

  getOffices(): void {
    this.officeService.getOffices()
    .subscribe(offices => {this.offices = offices;
      this.officeLocation = this.offices.find(office => office.officeId === this.employee.officeId)?.officeLocation!
      // this.officeLocation = this.offices.find(office => office.OfficeId === this.employee.OfficeId)?.OfficeLocation!
    });
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