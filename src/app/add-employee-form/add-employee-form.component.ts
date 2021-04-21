import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  employeeData = JSON.parse(localStorage.getItem("employee")!);

  @Input() employeeId: string = '';
  empId = this.employeeId;
  employee: any;

  @Output() btnStatusEvent = new EventEmitter<boolean>();
  
  addEmployeeForm = this.formBuilder.group({
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

  ngOnInit() {  }

  closeForm(value: boolean) {
    this.btnStatusEvent.emit(value);
  }

  //Pre-populating Preferred Name with First name & Last name
  updateName(event: Event) {
    this.firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    this.lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    this.prefName = this.firstName + " " + this.lastName;
  }

  filterEmployee() {
    this.employee = this.employeeData.filter((employee: Employee) => {
      return employee.id == this.employeeId;
    })[0];
  }

  onSubmit() {
    //Adding employee form
    if (this.employeeId == "" || this.employeeId == null) { 
      if (this.addEmployeeForm.valid) { 
        if (this.employeeData == null) {
          this.employeeData = [];
        }
        console.log(this.addEmployeeForm);
        let id: string = (this.employeeData.length + 1).toString();

        var employeeObj = new Employee(id, this.addEmployeeForm.value);
        this.employeeData.push(employeeObj);
        console.log(this.employeeData);
        localStorage.setItem("employee", JSON.stringify(this.employeeData));
      }

      else {
        window.alert("Please fill required details(star-marked) correctly!");
      }
    }

    //Editing employee form
    else {
      let self = this
      var empIndex = this.employeeData.findIndex(function(element: Employee) {
        return element.id == self.employeeId;
      });
    
      if(empIndex > -1){
        this.employeeData[empIndex]["firstName"] = this.addEmployeeForm.value.firstName;
        this.employeeData[empIndex]["lastName"] = this.addEmployeeForm.value.lastName;
        this.employeeData[empIndex]["preferredName"] = this.addEmployeeForm.value.preferredName;
        this.employeeData[empIndex]["email"] = this.addEmployeeForm.value.email;
        this.employeeData[empIndex]["jobTitle"] = this.addEmployeeForm.value.jobTitle;
        this.employeeData[empIndex]["office"] = this.addEmployeeForm.value.office;
        this.employeeData[empIndex]["department"] = this.addEmployeeForm.value.department;
        this.employeeData[empIndex]["phoneNumber"] = this.addEmployeeForm.value.phoneNumber;
        this.employeeData[empIndex]["skypeId"] = this.addEmployeeForm.value.skypeId;
      }
      console.log(this.employeeData);
      localStorage.setItem("employee", JSON.stringify(this.employeeData));
    }
  }
}
