import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor() { }
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      passwd: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    });
  }

  onClickSubmit(data: any) {
    console.log(data.uname);
    if (data.uname === 'ststemadmin' && data.passwd === 'admin23') {
      alert('Login Successful');
    } else {
      alert('invalid login');
    }

  }

}
