import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-filter-navbar',
  templateUrl: './filter-navbar.component.html',
  styleUrls: ['./filter-navbar.component.scss']
})
export class FilterNavbarComponent implements OnInit {
  departments = ['IT','HR','MD','Sales'];
  offices = ['Seattle','India'];
  jobTitles = ['SharePoint Practice Head','.Net Development Lead','Recruiting Expert','BI Developer','Business Analyst'];
  jobTitlesViewMore = ['Operations Manager','Product Manager','Network Engineer','Talent Magnet Jr.','Software Engineer','UI Designer'];

  viewMoreBtnStatus = true;
  jobTitlesViewMoreStatus = false;
  viewLessBtnStatus = false;

  employeeData = JSON.parse(localStorage.getItem("employee")!);

  filterApplied = '';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  applyFilter(value: string) {
  this._employeeService.getEmployeeData(this._employeeService.employeeData.filter(employee => 
		employee.department == value || employee.jobTitle == value || employee.office == value));

	console.log(this._employeeService.employeeData);
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

  getCountDepartment(dept: string) {
    return this.employeeData.filter((employee: Employee) => employee.department === dept).length;
  }

  getCountOffice(office: string) {
    return this.employeeData.filter((employee: Employee) => employee.office === office).length;
  }

  getCountJobTitle(jTitle: string) {
    return this.employeeData.filter((employee: Employee) => employee.jobTitle === jTitle).length;
  }

}
