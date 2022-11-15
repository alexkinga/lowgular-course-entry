import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {EmployeesFacesComponentModule} from "./ui/employees-faces/employees-faces.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectServiceModule} from "./services/project.service-module";
import {ProjectListComponent} from "./ui/project-list/project-list.component";
import {ProjectListComponentModule} from "./ui/project-list/project-list.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    ProjectServiceModule,
    EmployeesFacesComponentModule,
    ProjectListComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
