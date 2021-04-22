import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeModalPopupComponent } from './employee-modal-popup/employee-modal-popup.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    EmployeeListComponent,
    AddEditComponent,
    EmployeeModalPopupComponent,
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
