import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/department.model';
import { Office } from 'src/app/Models/office.model';
import { JobTitle } from 'src/app/Models/job-title.model';
import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeeService } from '../../Services/employee.service';
import { OfficeService } from 'src/app/Services/office.service';
import { JobTitleService } from 'src/app/Services/job-title.service';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  viewMoreBtnStatus = true;
  jobTitlesViewMoreStatus = false;
  viewLessBtnStatus = false;

  employeeData: Employee[] = [];

  departments: Department[] = [];
  offices: Office[] = [];
  jobTitles: JobTitle[] = [];

  constructor(private employees: EmployeeService,
    private departmentService: DepartmentService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getDepartments();
    this.getOffices();
    this.getJobTitles();
  }

  applyDepartmentFilter(value: string) {
    var deptId = this.departments.find((department: Department) =>
      department.departmentName === value)?.departmentId;
      // department.DepartmentName === value)?.DepartmentId;
    var employee = this.employeeData.filter((employee: any) =>
      employee.departmentId === deptId);
      // employee.DepartmentId === deptId);
    this.employees.updateEmployee(employee);
  }

  applyJobTitleFilter(value: string) {
    var jobTitleId = this.jobTitles.find((jTitle: JobTitle) =>
    jTitle.jobTitleName === value)?.jobTitleId;
    // jTitle.JobTitleName === value)?.JobTitleId;
    var employee = this.employeeData.filter((employee: any) =>
      employee.jobTitleId === jobTitleId);
      // employee.JobTitleId === jobTitleId);
    this.employees.updateEmployee(employee);
  }

  applyOfficeFilter(value: string) {
    var officeId = this.offices.find((office: Office) =>
    office.officeLocation === value)?.officeId;
    // office.OfficeLocation === value)?.OfficeId;
    var employee = this.employeeData.filter((employee: any) =>
      employee.officeId === officeId);
      // employee.OfficeId === officeId);
    this.employees.updateEmployee(employee);
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

  getEmployees(): void {
    this.employees.getEmployees()
    .subscribe(employees => {this.employeeData = employees});
  }

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

  getCountDepartment(deptId: number) {
    return this.employeeData.filter((employee: Employee) => employee.departmentId === deptId).length;
    // return this.employeeData.filter((employee: Employee) => employee.DepartmentId === deptId).length;
  }

  getCountOffice(officeId: number) {
    return this.employeeData.filter((employee: Employee) => employee.officeId === officeId).length;
    // return this.employeeData.filter((employee: Employee) => employee.OfficeId === officeId).length;
  }

  getCountJobTitle(jTitleId: number) {
    return this.employeeData.filter((employee: Employee) => employee.jobTitleId === jTitleId).length;
    // return this.employeeData.filter((employee: Employee) => employee.JobTitleId === jTitleId).length;
  }

}
