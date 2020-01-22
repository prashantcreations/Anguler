import { Component, OnInit } from '@angular/core';
import { EmpdataserviceService } from '../empdataservice.service';
import { IEmp } from '../IEmp';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmpdataserviceService]
})
export class EmployeeComponent implements OnInit {

  employeeList: IEmp[];

  constructor(private empdataserviceService: EmpdataserviceService) {
  }
  // lifecycle hook
  ngOnInit(): void {
    this.employeeList = this.empdataserviceService.getEmpList();
    this.empdataserviceService.getFromSpringBootClient()
      .subscribe(IEmp => this.employeeList = IEmp);
  }
}
