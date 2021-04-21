import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerBodyComponent } from './container-body/container-body.component';
import { FilterNavbarComponent } from './filter-navbar/filter-navbar.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerBodyComponent,
    FilterNavbarComponent,
    SearchFilterComponent,
    AddEmployeeFormComponent,
    EmployeeInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
