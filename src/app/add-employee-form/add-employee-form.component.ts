import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.scss']
})
export class AddEmployeeFormComponent implements OnInit {
  offices = ['Seattle', 'India'];
  departments = ['IT', 'HR', 'MD', 'Sales'];
  jobTitles = ['SharePoint Practice Head', '.Net Development Lead', 'Recruiting Expert', 'BI Developer', 'Business Analyst',
  'Operations Manager', 'Product Manager', 'Network Engineer', 'Talent Magnet Jr.', 'Software Engineer', 'UI Designer'];
  firstName = '';
  lastName = '';
  prefName = '';

  @Output() btnStatusEvent = new EventEmitter<boolean>();
  
  addEmployeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    preferredName: ['', Validators.required],
    email: ['', Validators.required],
    jobTitle: [this.jobTitles[0]],
    office: [this.offices[0]],
    department: [this.departments[0]],
    phoneNumber: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    skypeId: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {  }

  changeBtnStatus(value: boolean) {
    this.btnStatusEvent.emit(value);
  }

  updateFirstName(event: Event) {
    this.firstName = (<HTMLInputElement>event.target).value;
    this.prefName = this.firstName + " " + this.lastName;
  }

  updateLastName(event: Event) {
    this.lastName = (<HTMLInputElement>event.target).value;
    this.prefName = this.firstName + " " + this.lastName;
  }

  onSubmit() {
    var employeeData = JSON.parse(localStorage.getItem("employee")!);
    if(employeeData == null){
      employeeData = [];
    }
    console.log(this.addEmployeeForm);
    let id: string = (employeeData.length + 1).toString();
    console.log(id);

    var employeeObj = new Employee(id, this.addEmployeeForm.value.firstName, this.addEmployeeForm.value.lastName,
      this.addEmployeeForm.value.preferredName, this.addEmployeeForm.value.email, this.addEmployeeForm.value.jobTitle,
      this.addEmployeeForm.value.office, this.addEmployeeForm.value.department, this.addEmployeeForm.value.phoneNumber,
      this.addEmployeeForm.value.skypeId);
    employeeData.push(employeeObj);
    console.log(employeeData);
    localStorage.setItem("employee", JSON.stringify(employeeData));
  }

}
