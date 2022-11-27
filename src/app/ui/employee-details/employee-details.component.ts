import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

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
  // readonly data$: Observable<EmployeeModel> = this._activatedRoute.params.pipe(
  //   switchMap(data => this._employeeService.getOne(data['id'])));

  readonly dataSource$: Observable<EmployeeModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._employeeService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }
}
