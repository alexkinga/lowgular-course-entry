import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormComponentModule {
}
