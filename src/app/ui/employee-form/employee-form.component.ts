import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

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

  onButtonClicked(form: { name: string, age: number, salary: number }) {
    alert('User was successfully added to the database. ' + 'Name: ' + form.name + ', Age: ' + form.age + ', Salary: ' + form.salary);
  }

  constructor(private _employeeService: EmployeeService) { }

//created with lowgular
  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create({ name: form.name, age: form.age, salary: form.salary }).subscribe(() => {
      alert('User was successfully added to the database. ' + 'Name: ' + form.name + ', Age: ' + form.age + ', Salary: ' + form.salary);
    });

  }
}
