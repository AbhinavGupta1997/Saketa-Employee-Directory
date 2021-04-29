import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../Models/employee.model';
import { Guid } from 'guid-typescript';
import { EmployeeService } from '../../../Services/employee.service';

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
  fName = '';
  lName = '';
  prefName = '';
  id: Guid = Guid.create();

  employeeData = JSON.parse(localStorage.getItem("employee")!);

  @Input() employeeId: string = '';
  empId = this.employeeId;
  employee: any;
  userSubmitted: boolean = false;

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

  constructor(private formBuilder: FormBuilder,
    private employees: EmployeeService) { }

  ngOnInit() {
    if (this.employeeId) {
      this.employee = this.employeeData.filter((element: Employee) => {
        return element.id === this.employeeId;
      })[0]

      this.addEmployeeForm.setValue(this.employee);
    }
  }

  closeForm(value: boolean) {
    this.btnStatusEvent.emit(value);
  }

  //Pre-populating Preferred Name with First name & Last name
  updateName(event: Event) {
    this.fName = (<HTMLInputElement>document.getElementById("firstName")).value;
    this.lName = (<HTMLInputElement>document.getElementById("lastName")).value;
    this.prefName = this.fName + " " + this.lName;
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.addEmployeeForm.valid) {
    //Adding employee form
      if (this.employeeId === "" || this.employeeId === null) { 
        
        if (this.employeeData === null) {
          this.employeeData = [];
        }
        console.log(this.addEmployeeForm);

        var employeeObj = new Employee(this.addEmployeeForm.value);
        this.employeeData.push(employeeObj);
        console.log(this.employeeData);
        localStorage.setItem("employee", JSON.stringify(this.employeeData));
        this.closeForm(false);
      }

      //Editing employee form
      else {
        var empIndex = this.employeeData.findIndex((element: Employee) => {
          return element.id === this.employeeId;
        });
      
        if(empIndex > -1){
          this.employeeData[empIndex] = this.addEmployeeForm.value;
        }
        console.log(this.employeeData);
        localStorage.setItem("employee", JSON.stringify(this.employeeData));
        this.closeForm(false);
      }
      this.userSubmitted = false;
    }
    // this.userSubmitted = false;
    this.employees.updateEmployee(this.employeeData)
  }

  get firstName() { 
    return this.addEmployeeForm.get('firstName') as FormControl; 
  }

  get preferredName() { 
    return this.addEmployeeForm.get('preferredName') as FormControl; 
  }

  get email() { 
    return this.addEmployeeForm.get('email') as FormControl; 
  }

  get phoneNumber() { 
    return this.addEmployeeForm.get('phoneNumber') as FormControl; 
  }

  get department() { 
    return this.addEmployeeForm.get('department') as FormControl; 
  }

  get office() { 
    return this.addEmployeeForm.get('office') as FormControl; 
  }

  get jobTitle() { 
    return this.addEmployeeForm.get('jobTitle') as FormControl; 
  }
}
