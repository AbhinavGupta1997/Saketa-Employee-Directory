import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list-filter/employee-list/employee-list.component';
import { EmployeeModalPopupComponent } from './employee-list-filter/employee-list/employee-modal-popup/employee-modal-popup.component';
import { SideNavbarComponent } from './employee-list-filter/side-navbar/side-navbar.component';

const routes: Routes = [
  {path: 'Employee', component: EmployeeListComponent},
  {path: 'Department', component: EmployeeListComponent},
  {path: 'Department/GetDepartmentCount/1', component: SideNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
