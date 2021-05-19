import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../Services/employee.service';
import { Employee1 } from 'src/app/Models/employee1.model';
import { DepartmentService } from 'src/app/Services/department.service';
import { OfficeService } from 'src/app/Services/office.service';
import { JobTitleService } from 'src/app/Services/job-title.service';
import { Department } from 'src/app/Models/department.model';
import { JobTitle } from 'src/app/Models/job-title.model';
import { Office } from 'src/app/Models/office.model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  departments: Department[] = [];
  offices: Office[] = [];
  jobTitles: JobTitle[] = [];
  fName = '';
  lName = '';
  prefName = '';

  employeees: Employee1[] = [];

  @Input() employeeId: number = 0;
  employee: any;
  userSubmitted: boolean = false;

  @Output() btnStatusEvent = new EventEmitter<boolean>();
  
  addEmployeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    preferredName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    jobTitle: [''],
    office: [''],
    department: [''],
    phoneNumber: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    skypeId: ['']
  })

  constructor(private formBuilder: FormBuilder,
    private employees: EmployeeService,
    private departmentService: DepartmentService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService) { }

  ngOnInit() {
    this.getEmployees();
    this.getDepartments();
    this.getOffices();
    this.getJobTitles();
  }

  getEmployees(): void {
    this.employees.getEmployees()
    .subscribe(employeees => {
      this.employeees = employeees;
      if (this.employeeId) {
        this.employee = employeees.filter((element: Employee1) => {
          return element.EmployeeId === this.employeeId;
        })[0]
  
        this.addEmployeeForm.setValue(this.employee);
        console.log(this.employee)
      }
    });
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

  closeForm(value: boolean) {
    this.btnStatusEvent.emit(value);
  }

  test: any;

  //Pre-populating Preferred Name with First name & Last name
  updateName(event: Event) {
    this.fName = (<HTMLInputElement>document.getElementById("firstName")).value;
    this.lName = (<HTMLInputElement>document.getElementById("lastName")).value;
    this.prefName = this.fName + " " + this.lName;
  }

  onSubmit() {
    this.test = (<HTMLInputElement>document.getElementById("department")).value;
    this.userSubmitted = true;
    if (this.addEmployeeForm.valid) {
      //Adding employee form
      if (this.employeeId === 0 || this.employeeId === null) { 

        console.log(this.addEmployeeForm);

        var employeeObj = new Employee1(this.addEmployeeForm.value);
        this.employees.addEmployee(employeeObj)
        .subscribe(employee => this.employeees.push(employee));
        console.log(this.employeees);
        this.closeForm(false);
      }

      //Editing employee form
      else {
        var empIndex = this.employeees.findIndex((element: Employee1) => {
          return element.EmployeeId === this.employeeId;
        });
      
        if(empIndex > -1){
          var employeeObj = new Employee1(this.addEmployeeForm.value);
          this.employeees[empIndex] = employeeObj;
        }
        console.log(this.employeees);
        this.employees.editEmployee(this.employeeId, this.employeees[empIndex])
        .subscribe()
        this.closeForm(false);
      }
      this.userSubmitted = false;
    }
    this.employees.updateEmployee(this.employeees)
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
