import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list-filter/employee-list/employee-list.component';
import { EmployeeModalPopupComponent } from './employee-list-filter/employee-list/employee-modal-popup/employee-modal-popup.component';
import { SideNavbarComponent } from './employee-list-filter/side-navbar/side-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path: 'Employee', component: EmployeeListComponent},
  // {path: 'Department', component: EmployeeListComponent},
  // { path: 'Department/GetDepartmentCount/1', component: SideNavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '/', component: DashboardComponent },
  //{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
