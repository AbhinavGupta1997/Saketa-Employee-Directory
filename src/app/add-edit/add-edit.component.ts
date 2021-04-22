import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  offices = ['Seattle', 'India'];
  departments = ['IT', 'HR', 'MD', 'Sales'];
  jobTitles = ['SharePoint Practice Head', '.Net Development Lead', 'Recruiting Expert', 'BI Developer', 'Business Analyst',
  'Operations Manager', 'Product Manager', 'Network Engineer', 'Talent Magnet Jr.', 'Software Engineer', 'UI Designer'];
  firstName = '';
  lastName = '';
  prefName = '';
  id: Guid = Guid.create();

  employeeData = JSON.parse(localStorage.getItem("employee")!);

  @Input() employeeId: string = '';
  empId = this.employeeId;
  employee: any;

  @Output() btnStatusEvent = new EventEmitter<boolean>();
  
  addEmployeeForm = this.formBuilder.group({
    id: this.id.toString(),
    firstName: ['', Validators.required],
    lastName: [''],
    preferredName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    jobTitle: [this.jobTitles[0]],
    office: [this.offices[0]],
    department: [this.departments[0]],
    phoneNumber: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    skypeId: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   }

  closeForm(value: boolean) {
    this.btnStatusEvent.emit(value);
  }

  //Pre-populating Preferred Name with First name & Last name
  updateName(event: Event) {
    this.firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    this.lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    this.prefName = this.firstName + " " + this.lastName;
  }

  onSubmit() {
    if (this.addEmployeeForm.valid) {
    //Adding employee form
      if (this.employeeId == "" || this.employeeId == null) { 
        
        if (this.employeeData == null) {
          this.employeeData = [];
        }
        console.log(this.addEmployeeForm);

        var employeeObj = new Employee(this.addEmployeeForm.value);
        this.employeeData.push(employeeObj);
        console.log(this.employeeData);
        localStorage.setItem("employee", JSON.stringify(this.employeeData));        
      }

      //Editing employee form
      else {
        let self = this
        var empIndex = this.employeeData.findIndex(function(element: Employee) {
          return element.id == self.employeeId;
        });
      
        if(empIndex > -1){
          this.employeeData[empIndex] = this.addEmployeeForm.value;
        }
        console.log(this.employeeData);
        localStorage.setItem("employee", JSON.stringify(this.employeeData));
      }
    }
    else {
      window.alert("Please fill required details(star-marked) correctly!");
    }
  }
}
