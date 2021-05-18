import { Component, OnInit } from '@angular/core';
import { Employee1 } from 'src/app/Models/employee1.model';
import { Employee } from '../../Models/employee.model';
import { Department } from 'src/app/Models/department.model';
import { Office } from 'src/app/Models/office.model';
import { JobTitle } from 'src/app/Models/job-title.model';
import { EmployeeService } from '../../Services/employee.service';
import { OfficeService } from 'src/app/Services/office.service';
import { JobTitleService } from 'src/app/Services/job-title.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { Observable } from 'rxjs';

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

  // filteredEmpData: any;
  displayStatus: boolean = false;
  empId: number = 0;

  // empData: Employee[] = [];
  empData: Employee1[] = [];


  employeees: Employee1[] = [];
  departments: Department[] = [];
  offices: Office[] = [];
  jobTitles: JobTitle[] = [];
  // filteredEmpData: Employee1[] = [];
  // filteredEmpData: Employee1[] = this.employeees;

  constructor(private employees: EmployeeService,
    private departmentService: DepartmentService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService) { 
  }

  isSearchTextSent = false;

  ngOnInit() {
    // this.displayEmployees();
    // this.employees.getEmpData().subscribe(data => this.empData = data);
    // this.filteredEmpData = this.empData;

    // this.employeeData = this.employees.employeeData;
    this.getEmployees();
    this.employees.getEmpData().subscribe(data => this.filteredEmpData = data);
    this.getDepartment(1)
    // this.filteredEmpData = this.employeees;  
  }

  filteredEmpData: Employee1[] = this.employeees;

  getEmployees(): void {
    this.employees.getEmployees()
    .subscribe(employeees => {this.employeees = employeees;
      this.filteredEmpData = employeees;
      this.empData = employeees});
    // this.filteredEmpData = this.employeees;
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

  deptName: string = '';
  // deptId: number = 0;

  getDepartment(id: number) {
    return this.departmentService.getDepartmentById(id)
    .subscribe(deptName => this.deptName = deptName);
  }

  // getDepartment(id: number) {
  //   return this.departmentService.getDepartmentById(id)
  //   .subscribe(deptName => this.deptName = deptName);
  // }

  // sendData(searchText: string) {
  //   this.isSearchTextSent = true;
  //   if(searchText && this.filterByVal === "preferredName") {
  //     var employee = this.filteredEmpData.filter((employee: Employee) => {
  //       return employee.preferredName.toLowerCase().includes(searchText.toLowerCase());
  //     })
  //   }
  //   else if(searchText && this.filterByVal === "email") {
  //     employee = this.filteredEmpData.filter((employee: Employee) => {
  //       return employee.email.toLowerCase().includes(searchText.toLowerCase());
  //     })
  //   }
  //   else if(searchText && this.filterByVal === "jobTitle") {
  //     employee = this.filteredEmpData.filter((employee: Employee) => {
  //       return employee.jobTitle.toLowerCase().includes(searchText.toLowerCase());
  //     })
  //   }
  //   else if(searchText && this.filterByVal === "department") {
  //     employee = this.filteredEmpData.filter((employee: Employee) => {
  //       return employee.department.toLowerCase().includes(searchText.toLowerCase());
  //     })
  //   }
  //   else if(searchText && this.filterByVal === "office") {
  //     employee = this.filteredEmpData.filter((employee: Employee) => {
  //       return employee.office.toLowerCase().includes(searchText.toLowerCase());
  //     })
  //   }
  //   else if(searchText && this.filterByVal === "phoneNumber") {
  //     employee = this.filteredEmpData.filter((employee: Employee) => {
  //       return employee.phoneNumber.toLowerCase().includes(searchText.toLowerCase());
  //     })
  //   }
  //   else if(searchText && this.filterByVal === "skypeId") {
  //     employee = this.filteredEmpData.filter((employee: Employee) => {
  //       return employee.skypeId.toLowerCase().includes(searchText.toLowerCase());
  //     })
  //   }
  //   else if (searchText === "" || searchText === null) {
  //     employee = this.employees.employeeData;
  //   }
  //   else {
  //     employee = this.employees.getEmployeeData(this.employees.employeeData);
  //   }
  //   console.log(searchText);

  //   this.employees.updateEmployee(employee);
  //   this.employees.employee.next(searchText);
  // }

  sendData(searchText: string) {
    this.isSearchTextSent = true;
    if(searchText && this.filterByVal === "preferredName") {
      var employee = this.empData.filter((employee: Employee1) => {
        return employee.PreferredName.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "email") {
      employee = this.empData.filter((employee: Employee1) => {
        return employee.Email.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    // else if(searchText && this.filterByVal === "jobTitle") {
    //   employee = this.filteredEmpData.filter((employee: Employee1) => {
    //     return employee.jobTitle.toLowerCase().includes(searchText.toLowerCase());
    //   })
    // }
    // else if(searchText && this.filterByVal === "department") {
    //   employee = this.filteredEmpData.filter((employee: Employee1) => {
    //     return employee.department.toLowerCase().includes(searchText.toLowerCase());
    //   })
    // }
    // else if(searchText && this.filterByVal === "office") {
    //   employee = this.filteredEmpData.filter((employee: Employee1) => {
    //     return employee.office.toLowerCase().includes(searchText.toLowerCase());
    //   })
    // }
    else if(searchText && this.filterByVal === "phoneNumber") {
      employee = this.empData.filter((employee: Employee1) => {
        return employee.PhoneNumber.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "skypeId") {
      employee = this.empData.filter((employee: Employee1) => {
        return employee.SkypeId.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if (searchText === "" || searchText === null) {
      employee = this.employeees;
      // employee = this.employees.employeeData;
    }
    else {
      // employee = this.employees.getEmployeeData(this.employees.employeeData);
      employee = this.employeees;
    }
    console.log(searchText);

    this.employees.updateEmployee(employee);
    this.employees.employee.next(searchText);
  }

  // setAlphabet(alphabet: string) {
  //   var employee = this.employees.employeeData.filter(employee => 
  //     employee.preferredName.toLowerCase().startsWith(alphabet.toLowerCase()));

  //   this.employees.updateEmployee(employee);
  //   console.log(alphabet);
  //   console.log(this.employees.employeeData);
  // }

  setAlphabet(alphabet: string) {
    var employee = this.employeees.filter(employee => 
      employee.PreferredName.toLowerCase().startsWith(alphabet.toLowerCase()));

    this.employees.updateEmployee(employee);
    console.log(alphabet);
    // console.log(this.employees.employeeData);
  }

  // displayEmployees() {
  //   this.empData = this.employees.employeeData;
  // }

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

  // onClear() {
  //   this.employees.getEmployeeData(this.employees.employeeData);
  // }

  onClear() {
    this.employees.getEmployeeData(this.employeees);
  }
 
}
