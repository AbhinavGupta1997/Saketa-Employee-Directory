import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.scss']
})
export class EditEmployeeFormComponent implements OnInit {

  @Input() employeeId: string = '';

  empId = this.employeeId;

  offices = ['Seattle', 'India'];
  departments = ['IT', 'HR', 'MD', 'Sales'];
  jobTitles = ['SharePoint Practice Head', '.Net Development Lead', 'Recruiting Expert', 'BI Developer', 'Business Analyst',
  'Operations Manager', 'Product Manager', 'Network Engineer', 'Talent Magnet Jr.', 'Software Engineer', 'UI Designer'];

  @Output() btnStatusEvent = new EventEmitter<boolean>();

  empData: Employee[] =[];
  employee: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.empData = JSON.parse(localStorage.getItem("employee")!); 
    this.employee = this.empData.filter((employee: Employee) => {
    return employee.id == this.employeeId;
  })[0];
  }

  updateEmployeeForm = this.formBuilder.group({
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

  changeBtnStatus(value: boolean) {
    this.btnStatusEvent.emit(value);
  }

  modifyEmployee() {
    let self = this
    var employeeData = JSON.parse(localStorage.getItem("employee")!);
    var empIndex = employeeData.findIndex(function(element: Employee) {
      return element.id == self.employeeId;
    });
  
    if(empIndex > -1){
      employeeData[empIndex]["firstName"] = this.updateEmployeeForm.value.firstName;
      employeeData[empIndex]["lastName"] = this.updateEmployeeForm.value.lastName;
      employeeData[empIndex]["preferredName"] = this.updateEmployeeForm.value.preferredName;
      employeeData[empIndex]["email"] = this.updateEmployeeForm.value.email;
      employeeData[empIndex]["jobTitle"] = this.updateEmployeeForm.value.jobTitle;
      employeeData[empIndex]["office"] = this.updateEmployeeForm.value.office;
      employeeData[empIndex]["department"] = this.updateEmployeeForm.value.department;
      employeeData[empIndex]["phoneNumber"] = this.updateEmployeeForm.value.phoneNumber;
      employeeData[empIndex]["skypeId"] = this.updateEmployeeForm.value.skypeId;
    }
    console.log(employeeData);
    localStorage.setItem("employee", JSON.stringify(employeeData));
  }
  

}
