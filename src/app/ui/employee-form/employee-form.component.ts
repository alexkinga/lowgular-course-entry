import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  // FormGroup śledzi stan wartości i poprawność w całym formularzu, formControl - pojedynczej kontrolki
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  onButtonClicked(form: {name:string, age:number, salary:number}){
    alert('User was successfully added to the database. ' + 'Name: ' + form.name + ', Age: ' +  form.age + ', Salary: ' + form.salary);
  }
}