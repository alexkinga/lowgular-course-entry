import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {

  data$ = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) { }

  remove(id: string) {
    this._employeeService.delete(id).subscribe(() => {
      alert('User was successfully removed');
    });
  }
}

