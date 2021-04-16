import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-container-display-card',
  templateUrl: './container-display-card.component.html',
  styleUrls: ['./container-display-card.component.scss']
})
export class ContainerDisplayCardComponent implements OnInit {

  @Input() item1: string = '';

  empData: Employee[] = [];
  filteredEmpData: Employee[] = [];
  // private _searchTerm: string = this.item1;
  searchterm: string = this.item1;

  get searchTerm() {
    // return this._searchTerm;
    this.searchterm = this.item1;
    return this.searchterm;
  }

  set searchTerm(value: string) {
    this.searchterm = value;
    this.filteredEmpData = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.empData.filter(employee =>
      employee.preferredName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  // empData = JSON.parse(localStorage.getItem("employee")!);
  displayStatus = false;
  // currentItem =  'Television';
  empId = '';

  constructor() { }

  ngOnInit() {
    // this.empData = JSON.parse(localStorage.getItem("employee")!);
    // this.filteredEmpData = this.empData;
    // // console.log('hi');
  }

  changeDisplayStatus(value: string) {
    this.displayStatus = true;
    this.empId = value;
    console.log(this.empId);
    // console.log(this._searchTerm);
    console.log(this.searchterm);
    // console.log(value);
    console.log(this.item1);
    // var employee = this.empData.filter(function(employee: Employee) {
    //   return employee.id == value;
    // })[0];
  }

  changeDisplayFalse(newVal: boolean) {
    this.displayStatus = newVal;
  }

  // viewEmployeeDetails(employeeId: string) {
  //   var employee = this.empData.filter(function(employee: Employee) {
  //     return employee.id == employeeId;
  //   })[0];
  // }

}
