import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Department } from 'src/app/Models/department.model';
import { Office } from 'src/app/Models/office.model';
import { JobTitle } from 'src/app/Models/job-title.model';
import { DepartmentService } from 'src/app/Services/department.service';
import { Employee } from '../../Models/employee.model';
import { EmployeeService } from '../../Services/employee.service';
import { SharedService } from '../../Services/shared.service'
import { OfficeService } from 'src/app/Services/office.service';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  // departments = ['IT','HR','MD','Sales'];
  // offices = ['Seattle','India'];
  // jobTitles = ['SharePoint Practice Head','.Net Development Lead','Recruiting Expert','BI Developer','Business Analyst'];
  jobTitlesViewMore = ['Operations Manager','Product Manager','Network Engineer','Talent Magnet Jr.','Software Engineer','UI Designer'];

  viewMoreBtnStatus = true;
  jobTitlesViewMoreStatus = false;
  viewLessBtnStatus = false;

  employeeData = JSON.parse(localStorage.getItem("employee")!);

  filterApplied = '';
  departmentCount!: number;
  officeCount!: number;
  jobTitleCount!: number;

  departments: Department[] = [];
  offices: Office[] = [];
  jobTitles: JobTitle[] = [];

  constructor(private employees: EmployeeService,
    private sharedService: SharedService,
    private departmentService: DepartmentService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getOffices();
    this.getJobTitles();
    this.getDepartmentCount();
  }

  applyFilter(value: string) {
    var employee = this.employeeData.filter((employee: any) =>
      employee.department === value || employee.jobTitle === value || employee.office === value);
    this.employees.updateEmployee(employee);

	console.log(this.employees.employeeData);
  }

  onViewMoreClick() {
    this.viewMoreBtnStatus = false;
    this.jobTitlesViewMoreStatus = true;
    this.viewLessBtnStatus = true;
  }

  onViewLessClick() {
    this.viewMoreBtnStatus = true;
    this.jobTitlesViewMoreStatus = false;
    this.viewLessBtnStatus = false;
  }

  // getCount(property: string, value: string) {
  //   return this.employeeData.filter((employee: Employee) => employee[property] === value).length;
  // }
  // getDepartmentCount(id: number) {
  //   return this.sharedService.getDepartmentCount(id);
  // }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => this.departments = departments);
  }

  getOffices(): void {
    this.officeService.getOffices()
    .subscribe(offices => this.offices = offices);
  }

  getJobTitles(): void {
    this.jobTitleService.getJobTitles()
    .subscribe(jobTitles => this.jobTitles = jobTitles);
  }

  getDepartmentCount() {
    return this.departmentService.getDepartmentCount()
    .subscribe(deptCount => this.departmentCount = deptCount);
    // console.log(this.departmentCount);
  }

  getOfficeCount(id: number) {
    return this.officeService.getOfficeCount(id)
    .subscribe(officeCount => this.officeCount = officeCount);
  }

  getJobTitleCount(id: number) {
    return this.jobTitleService.getJobTitleCount(id)
    .subscribe(jobTitleCount => this.jobTitleCount = jobTitleCount);
  }

  // getCountDepartment(dept: string) {
  //   return this.employeeData.filter((employee: Employee) => employee.department === dept).length;
  // }

  // getCountOffice(office: string) {
  //   return this.employeeData.filter((employee: Employee) => employee.office === office).length;
  // }

  getCountJobTitle(jTitle: string) {
    return this.employeeData.filter((employee: Employee) => employee.jobTitle === jTitle).length;
  }

}
