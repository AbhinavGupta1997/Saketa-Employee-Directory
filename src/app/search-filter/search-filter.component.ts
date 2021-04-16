import { Component, OnInit, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})

export class SearchFilterComponent implements OnInit {
  alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  btnStatus = false;
  searchText: any;
  filterByVal = "preferredName";

  employeeData: any;

  @Output() newItemEvent = new EventEmitter<string>();

  filteredEmpData: any;
  displayStatus: boolean = false;
  empId: string ="";

  empData: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { 
  }

  ngOnInit(): void {    
    this.displayEmployees();
    this._employeeService.empData.subscribe(data => this.empData = data);
    this.filteredEmpData = this.empData;

    this.employeeData = this._employeeService.employeeData;
  }

  searchEmployee(searchText: string) {
    this.filteredEmpData = this._employeeService.employeeData;
    if(searchText && this.filterByVal === "preferredName") {
      this.filteredEmpData = this.filteredEmpData.filter((employee: Employee) => {
        return employee.preferredName.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "email") {
      this.filteredEmpData = this.filteredEmpData.filter((employee: Employee) => {
        return employee.email.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "jobTitle") {
      this.filteredEmpData = this.filteredEmpData.filter((employee: Employee) => {
        return employee.jobTitle.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "department") {
      this.filteredEmpData = this.filteredEmpData.filter((employee: Employee) => {
        return employee.department.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "office") {
      this.filteredEmpData = this.filteredEmpData.filter((employee: Employee) => {
        return employee.office.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "phoneNumber") {
      this.filteredEmpData = this.filteredEmpData.filter((employee: Employee) => {
        return employee.phoneNumber.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else if(searchText && this.filterByVal === "skypeId") {
      this.filteredEmpData = this.filteredEmpData.filter((employee: Employee) => {
        return employee.skypeId.toLowerCase().includes(searchText.toLowerCase());
      })
    }
    else {
      this._employeeService.getEmployeeData(this.filteredEmpData);
    }
    this._employeeService.getEmployeeData(this.filteredEmpData);
    console.log(searchText);
  }

  setAlphabet(alphabet: string) {
    this._employeeService.getEmployeeData(this._employeeService.employeeData.filter(employee => 
      employee.firstName.toLowerCase().startsWith(alphabet.toLowerCase())));

    console.log(alphabet);
    console.log(this._employeeService.employeeData);
  }

  displayEmployees() {
    this.empData = this._employeeService.employeeData;
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

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log(value);
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
    this._employeeService.getEmployeeData(this._employeeService.employeeData);
  }
 
}
