import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {EmployeeModel} from '../EmployeeModel';
import {EMPLOYEES } from '../EmployeeList'

import swal from 'sweetalert'
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private employeservice:EmployeeServiceService) { }

  ngOnInit() {
  }

  employe: EmployeeModel;
  employee:EmployeeModel[];

  add(employeeid:number,employeename:string,email:string,pass:string,age:number,mobile:string,gender:string,qualification:string): void {
  
    this.employe=new EmployeeModel();
    
    if(employeeid!=0)
    {
   this.employe.employeeid=employeeid;
   this.employe.employeename=employeename;
   this.employe.email=email;
   this.employe.pass=pass;
   this.employe.age=age;
   this.employe.mobile=mobile;
   this.employe.gender=gender;
   this.employe.qualification=qualification;

 
   this.employeservice.addservice(this.employe)
   .subscribe(employee => {swal(
    'Good job!',
    'SuccessFully Added',
    'success'
  )});
    }
  }
  }