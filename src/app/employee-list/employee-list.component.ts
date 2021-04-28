import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

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

  filteredEmpData: any;
  displayStatus: boolean = false;
  empId: string ="";

  empData: Employee[] = [];

  constructor(private employees: EmployeeService) { 
  }

  isSearchTextSent = false;

  ngOnInit() {

    this.displayEmployees();
    this.employees.getEmpData().subscribe(data => this.empData = data);
    this.filteredEmpData = this.empData;

    this.employeeData = this.employees.employeeData;
  }

  ngOnChanges() {
    this.displayEmployees();
    this.employees.getEmpData().subscribe(data => this.empData = data);
    this.filteredEmpData = this.empData;

    this.employeeData = this.employees.employeeData;
  }

  sendData(searchText: string) {
    this.isSearchTextSent = true;
    if(searchText && this.filterByVal === "preferredName") {
      var employee = this.filteredEmpData.filter((employee: Employee) => {
        return employee.preferredName.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "email") {
      employee = this.filteredEmpData.filter((employee: Employee) => {
        return employee.email.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "jobTitle") {
      employee = this.filteredEmpData.filter((employee: Employee) => {
        return employee.jobTitle.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "department") {
      employee = this.filteredEmpData.filter((employee: Employee) => {
        return employee.department.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "office") {
      employee = this.filteredEmpData.filter((employee: Employee) => {
        return employee.office.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "phoneNumber") {
      employee = this.filteredEmpData.filter((employee: Employee) => {
        return employee.phoneNumber.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "skypeId") {
      employee = this.filteredEmpData.filter((employee: Employee) => {
        return employee.skypeId.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if (searchText == "" || searchText == null) {
      employee = this.employees.employeeData;
    }
    else {
      employee = this.employees.getEmployeeData(this.employees.employeeData);
    }
    console.log(searchText);

    this.employees.updateEmployee(employee);
    this.employees.employee.next(searchText);
  }

  setAlphabet(alphabet: string) {
    var employee = this.employees.employeeData.filter(employee => 
      employee.preferredName.toLowerCase().startsWith(alphabet.toLowerCase()));

    this.employees.updateEmployee(employee);
    console.log(alphabet);
    console.log(this.employees.employeeData);
  }

  displayEmployees() {
    this.empData = this.employees.employeeData;
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

  changeDisplayStatus(value: string) {
    this.displayStatus = true;
    this.empId = value;
    console.log(this.empId);
  }

  changeDisplayFalse(newVal: boolean) {
    this.displayStatus = newVal;
  }

  onClear() {
    this.employees.getEmployeeData(this.employees.employeeData);
  }
 
}
