import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {EmployeeModel} from "../model/employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json');
  }

  //created with lowgular
  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }

  // create(employee: CreateEmployeeModel): Observable<any> {
  //   return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee);
  // }




}

