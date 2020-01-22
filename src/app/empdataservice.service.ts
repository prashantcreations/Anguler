import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmp } from './IEmp';


@Injectable({
  providedIn: 'root'
})
export class EmpdataserviceService {

  constructor(private http: HttpClient) {

  }


  employeeList: IEmp[] = [
    {
      code: 'emp101', name: 'Tom', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '1/1/1999'
    },
    {
      code: 'emp102', name: 'Tracy', gender: 'Female',
      annualSalary: 300, dateOfBirth: '1/1/1998'
    },
    {
      code: 'emp103', name: 'Dave', gender: 'Male',
      annualSalary: 3666, dateOfBirth: '1/1/2000'
    }
  ];

  getFromSpringBootClient(): Observable<IEmp[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      })
    };
    return this.http.get<IEmp[]>('http://localhost:3000', httpOptions);
  }

  getEmpList(): IEmp[] {
    return this.employeeList;
  }

}
