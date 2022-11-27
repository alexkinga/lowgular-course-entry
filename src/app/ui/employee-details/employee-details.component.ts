import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map, } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly params$: Observable<EmployeeModel> = this._activatedRoute.params.pipe(
    map(data => ({
      id: data['id'],
      name: data['name'],
      email: data['email'],
      image: data['image']
    })));

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }
}
