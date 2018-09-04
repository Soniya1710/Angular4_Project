import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel }from '../EmployeeModel';
import { EmployeeServiceService }  from '../employee-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() employee: EmployeeModel;
 
   constructor( private route: ActivatedRoute,private employeeserv : EmployeeServiceService,private location: Location) { 
   }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    const employeeid = + this.route.snapshot.paramMap.get('employeeid');
    this.employeeserv.getid(employeeid)
    .subscribe(employee => this.employee = employee);
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.employeeserv.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
      swal("Good job!", "SuccessFully Updated", "success")
  }
}
