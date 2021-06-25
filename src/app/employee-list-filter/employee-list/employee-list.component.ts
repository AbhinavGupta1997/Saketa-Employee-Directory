import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { Department } from 'src/app/Models/department.model';
import { Office } from 'src/app/Models/office.model';
import { JobTitle } from 'src/app/Models/job-title.model';
import { EmployeeService } from '../../Services/employee.service';
import { OfficeService } from 'src/app/Services/office.service';
import { JobTitleService } from 'src/app/Services/job-title.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { AppComponent } from 'src/app/app.component';
import { ClaimsService } from 'src/app/Services/claims.service';

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
    private jobTitleService: JobTitleService,
    private appComponent: AppComponent,
    private claimService: ClaimsService) { 
  }

  isSearchTextSent = false;

  ngOnInit() {
    this.getOffices();
    this.getDepartments();
    this.getJobTitles();
    // this.getEmployees();
    this.getEmployeeList();
    this.employees.getEmpData().subscribe(data => this.filteredEmpData = data);
    this.getClaims();
  }

  claims: any[] = [];

  role!: string;

  getClaims(): void {
    this.claimService.getClaims()
    .subscribe(claims => {this.claims = claims;
    this.role = claims[8].value})
  }

  filteredEmpData: Employee[] = this.employeees;

  // getEmployees(): void {
  //   this.employees.getEmployees()
  //   .subscribe(employeees => {this.employeees = employeees;
  //     this.filteredEmpData = employeees;
  //     this.empData = employeees});
  // }

  getEmployeeList(): void {
    this.employees.getEmployees()
    .subscribe(employeees => {this.employeees = employeees;
      this.filteredEmpData = employeees;
      this.empData = employeees});
  }

  // getDepartments(): void {
  //   this.departmentService.getDepartments()
  //   .subscribe(departments => {this.departments = departments;
  // });
  // }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => {this.departments = departments;
  });
  }

  getDepartment(id: number): any {
    return this.departments.find((dept: Department) => dept.departmentId === id)?.departmentName;
    // return this.departments.find((dept: Department) => dept.DepartmentId === id)?.DepartmentName;
  }

  getJobTitle(id: number): any {
    return this.jobTitles.find((jTitle: JobTitle) => jTitle.jobTitleId === id)?.jobTitleName;
    // return this.jobTitles.find((jTitle: JobTitle) => jTitle.JobTitleId === id)?.JobTitleName;
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
        return employee.preferredName.toLowerCase().includes(searchText.toLowerCase());
        // return employee.PreferredName.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "email") {
      employee = this.empData.filter((employee: Employee) => {
        return employee.email.toLowerCase().includes(searchText.toLowerCase());
        // return employee.Email.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "department") {
      var deptId = this.departments.find((department: Department) =>
      department.departmentName.toLowerCase().includes(searchText.toLowerCase()))?.departmentId;
      // department.DepartmentName.toLowerCase().includes(searchText.toLowerCase()))?.DepartmentId;
      employee = this.empData.filter((employee: Employee) => {
        return employee.departmentId === deptId;
        // return employee.DepartmentId === deptId;
      })
    }
    else if(searchText && this.filterByVal === "jobTitle") {
      var jobTitleId = this.jobTitles.find((jTitle: JobTitle) =>
      jTitle.jobTitleName.toLowerCase().includes(searchText.toLowerCase()))?.jobTitleId;
      // jTitle.JobTitleName.toLowerCase().includes(searchText.toLowerCase()))?.JobTitleId;
      employee = this.empData.filter((employee: Employee) => {
        return employee.jobTitleId === jobTitleId;
        // return employee.JobTitleId === jobTitleId;
      })
    }
    else if(searchText && this.filterByVal === "office") {
      var officeId = this.offices.find((office: Office) =>
      office.officeLocation.toLowerCase().includes(searchText.toLowerCase()))?.officeId;
      // office.OfficeLocation.toLowerCase().includes(searchText.toLowerCase()))?.OfficeId;
      employee = this.empData.filter((employee: Employee) => {
        return employee.officeId === officeId;
        // return employee.OfficeId === officeId;
      })
    }
    else if(searchText && this.filterByVal === "phoneNumber") {
      employee = this.empData.filter((employee: Employee) => {
        return employee.phoneNumber.toLowerCase().includes(searchText.toLowerCase());
        // return employee.PhoneNumber.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "skypeId") {
      employee = this.empData.filter((employee: Employee) => {
        return employee.skypeId.toLowerCase().includes(searchText.toLowerCase());
        // return employee.SkypeId.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if (searchText === "" || searchText === null) {
      employee = this.employeees;
    }
    else {
      employee = this.employeees;
    }
    // console.log(searchText);

    this.employees.updateEmployee(employee);
    this.employees.employee.next(searchText);
  }

  setAlphabet(alphabet: string) {
    var employee = this.employeees.filter(employee => 
      employee.preferredName.toLowerCase().startsWith(alphabet.toLowerCase()));
      // employee.PreferredName.toLowerCase().startsWith(alphabet.toLowerCase()));

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
