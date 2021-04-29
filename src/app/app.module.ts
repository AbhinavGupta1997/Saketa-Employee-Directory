import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './employee-list-filter/side-navbar/side-navbar.component';
import { EmployeeListComponent } from './employee-list-filter/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddEditComponent } from './employee-list-filter/employee-list/add-edit/add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeModalPopupComponent } from './employee-list-filter/employee-list/employee-modal-popup/employee-modal-popup.component';
import { EmployeeService } from './Services/employee.service';
import { SharedService } from './Services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EmployeeListFilterComponent } from './employee-list-filter/employee-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    EmployeeListComponent,
    AddEditComponent,
    EmployeeModalPopupComponent,
    HeaderComponent,
    EmployeeListFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [EmployeeService,
    SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
