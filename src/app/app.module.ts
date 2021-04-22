import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterNavbarComponent } from './filter-navbar/filter-navbar.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterNavbarComponent,
    SearchFilterComponent,
    AddEditComponent,
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
