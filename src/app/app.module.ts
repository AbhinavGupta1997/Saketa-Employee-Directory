import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { ContainerMainBodyComponent } from './container-main-body/container-main-body.component';
import { ContainerBodyComponent } from './container-body/container-body.component';
import { FilterNavbarComponent } from './filter-navbar/filter-navbar.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ContainerDisplayCardComponent } from './container-display-card/container-display-card.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EditEmployeeFormComponent } from './edit-employee-form/edit-employee-form.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    ContainerMainBodyComponent,
    ContainerBodyComponent,
    FilterNavbarComponent,
    SearchFilterComponent,
    ContainerDisplayCardComponent,
    AddEmployeeFormComponent,
    EmployeeInfoComponent,
    EditEmployeeFormComponent
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
