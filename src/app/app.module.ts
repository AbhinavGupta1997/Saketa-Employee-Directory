import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './employee-list-filter/side-navbar/side-navbar.component';
import { EmployeeListComponent } from './employee-list-filter/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { AddEditComponent } from './employee-list-filter/employee-list/add-edit/add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeModalPopupComponent } from './employee-list-filter/employee-list/employee-modal-popup/employee-modal-popup.component';
import { EmployeeService } from './Services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EmployeeListFilterComponent } from './employee-list-filter/employee-list-filter.component';
import { DepartmentService } from './Services/department.service';
import { OfficeService } from './Services/office.service';
import { JobTitleService } from './Services/job-title.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OAuthModule } from 'angular-oauth2-oidc';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    EmployeeListComponent,
    AddEditComponent,
    EmployeeModalPopupComponent,
    HeaderComponent,
    EmployeeListFilterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['https://localhost:6001/api/Employee',
          'https://localhost:6001/api/Department',
          'https://localhost:5001/connect/userinfo'],
          sendAccessToken: true
      }
  }),
  ],
  providers: [EmployeeService,
    DepartmentService,
    OfficeService,
    JobTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
