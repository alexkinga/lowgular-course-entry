import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeDetailsComponent } from './ui/employee-details/employee-details.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { HomeComponentModule } from './ui/home/home.component-module';
import { EmployeeDetailsComponentModule } from './ui/employee-details/employee-details.component-module';

const routes: Routes = [{ path: 'employee-list', component: EmployeeListComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: '', component: HomeComponent }, { path: 'employee-details/:id', component: EmployeeDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, EmployeeFormComponentModule, HomeComponentModule, EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
