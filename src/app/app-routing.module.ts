import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsDetailsComponent } from './clients-details/clients-details.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { DisplayimageComponent } from './displayimage/displayimage.component';
import { BillableEmployeesComponent } from './billable-employees/billable-employees.component';
import { ClientsLogoComponent } from './clients-logo/clients-logo.component';
import { BillableComponent } from './billable/billable.component';
import { ClientsdataComponent } from './clientsdata/clientsdata.component';
import { BillabletableComponent } from './billabletable/billabletable.component';
import { NonBillableComponent } from './non-billable/non-billable.component';
import { RevenueDetialsComponent } from './revenue-detials/revenue-detials.component';
import { BillableemployeesinfoComponent } from './billableemployeesinfo/billableemployeesinfo.component';
import { PackageDetailsOfbillEmpComponent } from './package-details-ofbill-emp/package-details-ofbill-emp.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NonBillableTableComponent } from './non-billable-table/non-billable-table.component';
import { PaidUnpaidTableComponent } from './paid-unpaid-table/paid-unpaid-table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EmployeeToProjectComponent } from './employee-to-project/employee-to-project.component';
import { NewCreateProjectComponent } from './new-create-project/new-create-project.component';
import { AllClientsComponent } from './all-clients/all-clients.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: DisplayimageComponent},
  {path: 'clientsDetails', component: ClientsDetailsComponent, canActivate: [AuthGuard], data: { expectedRoles: ['admin']}},
  {path: 'clientsInfo', component: ClientsInfoComponent, canActivate: [AuthGuard], data: { expectedRoles: ['admin', 'manager']}},
  {path: 'billableEmployeesDetails', component: BillableEmployeesComponent,
  canActivate: [AuthGuard], data: { expectedRoles: ['admin', 'manager']}},
  {path: 'clientsLogo', component: ClientsLogoComponent},
  {path: 'BillableEmployees', component: BillableComponent, canActivate: [AuthGuard], data: { expectedRoles: ['admin', 'manager']}},
  {path: 'nonBillable', component: NonBillableComponent},
  {path: 'RevenueDetails', component: RevenueDetialsComponent},
  {path: 'clientsdata', component: ClientsdataComponent},
  {path: 'billableTable', component: BillabletableComponent},
  {path: 'billableEmployeesInfo', component: BillableemployeesinfoComponent},
  {path: 'packageDetailsbillEmp', component: PackageDetailsOfbillEmpComponent},
  {path: 'createEmployee', component: CreateEmployeeComponent, canActivate: [AuthGuard], data: { expectedRoles: ['admin']}},
  {path: 'nonBillableTable', component: NonBillableTableComponent},
  {path: 'nonBillablePaidUnpaidTable', component: PaidUnpaidTableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'create_project', component: CreateProjectComponent},
  {path: 'manage_emp', component: ManageEmployeeComponent},
  {path: 'create_attendance', component: CreateAttendanceComponent},
  {path: 'add-project', component: AddProjectComponent},
  {path: 'employee-to-Project', component: EmployeeToProjectComponent},
  {path: 'new-create-project', component: NewCreateProjectComponent},
  {path: 'all-clients', component: AllClientsComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
