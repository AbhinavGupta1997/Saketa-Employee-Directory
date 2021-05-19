import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { Department } from 'src/app/Models/department.model';
import { Office } from 'src/app/Models/office.model';
import { JobTitle } from 'src/app/Models/job-title.model';
import { EmployeeService } from '../../Services/employee.service';
import { OfficeService } from 'src/app/Services/office.service';
import { JobTitleService } from 'src/app/Services/job-title.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {
  alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  btnStatus = false;
  searchText: any;
  filterByVal = "preferredName";

  employeeData: any;

  displayStatus: boolean = false;
  empId: number = 0;

  empData: Employee[] = [];


  employeees: Employee[] = [];
  departments: Department[] = [];
  offices: Office[] = [];
  jobTitles: JobTitle[] = [];
  deptName!: string;

  constructor(private employees: EmployeeService,
    private departmentService: DepartmentService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService) { 
  }

  isSearchTextSent = false;

  ngOnInit() {
    this.getDepartments();
    this.getJobTitles();
    this.getEmployees();
    this.employees.getEmpData().subscribe(data => this.filteredEmpData = data);
  }

  filteredEmpData: Employee[] = this.employeees;

  getEmployees(): void {
    this.employees.getEmployees()
    .subscribe(employeees => {this.employeees = employeees;
      this.filteredEmpData = employeees;
      this.empData = employeees});
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => {this.departments = departments;
  });
  }

  getDepartment(id: number): any {
    return this.departments.find((dept: Department) => dept.DepartmentId === id)?.DepartmentName;
  }

  getJobTitle(id: number): any {
    return this.jobTitles.find((jTitle: JobTitle) => jTitle.JobTitleId === id)?.JobTitleName;
  }

  getOffices(): void {
    this.officeService.getOffices()
    .subscribe(offices => this.offices = offices);
  }

  getJobTitles(): void {
    this.jobTitleService.getJobTitles()
    .subscribe(jobTitles => this.jobTitles = jobTitles);
  }

  sendData(searchText: string) {
    this.isSearchTextSent = true;
    if(searchText && this.filterByVal === "preferredName") {
      var employee = this.empData.filter((employee: Employee) => {
        return employee.PreferredName.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "email") {
      employee = this.empData.filter((employee: Employee) => {
        return employee.Email.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    // else if(searchText && this.filterByVal === "jobTitle") {
    //   employee = this.filteredEmpData.filter((employee: Employee) => {
    //     return employee.jobTitle.toLowerCase().includes(searchText.toLowerCase());
    //   })
    // }
    // else if(searchText && this.filterByVal === "department") {
    //   employee = this.filteredEmpData.filter((employee: Employee) => {
    //     return employee.department.toLowerCase().includes(searchText.toLowerCase());
    //   })
    // }
    // else if(searchText && this.filterByVal === "office") {
    //   employee = this.filteredEmpData.filter((employee: Employee) => {
    //     return employee.office.toLowerCase().includes(searchText.toLowerCase());
    //   })
    // }
    else if(searchText && this.filterByVal === "phoneNumber") {
      employee = this.empData.filter((employee: Employee) => {
        return employee.PhoneNumber.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "skypeId") {
      employee = this.empData.filter((employee: Employee) => {
        return employee.SkypeId.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if (searchText === "" || searchText === null) {
      employee = this.employeees;
    }
    else {
      employee = this.employeees;
    }
    console.log(searchText);

    this.employees.updateEmployee(employee);
    this.employees.employee.next(searchText);
  }

  setAlphabet(alphabet: string) {
    var employee = this.employeees.filter(employee => 
      employee.PreferredName.toLowerCase().startsWith(alphabet.toLowerCase()));

    this.employees.updateEmployee(employee);
    console.log(alphabet);
  }

  setFilterBy() {
    this.filterByVal = (<HTMLInputElement>document.getElementById("filter-type")).value;
    console.log(this.filterByVal);
  }

  changeStatus() {
    this.btnStatus = true;
  }

  changeStatusFalse(newVal: boolean) {
    this.btnStatus = newVal;
  }

  changeDisplayStatus(value: number) {
    this.displayStatus = true;
    this.empId = value;
    console.log(this.empId);
  }

  changeDisplayFalse(newVal: boolean) {
    this.displayStatus = newVal;
  }

  onClear() {
    this.employees.getEmployeeData(this.employeees);
  }
 
}
