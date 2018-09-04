import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../EmployeeList';
import { EmployeeModel } from '../EmployeeModel';
import { EmployeeServiceService } from '../employee-service.service';
import swal from 'sweetalert'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee:EmployeeModel[];
  
  constructor(private empservice:EmployeeServiceService) { }

   getemployees(): void {
    this.empservice.getEmployees()
        .subscribe(employe => this.employee = employe);
  }


  delete(employee:EmployeeModel): void {
    this.employee = this.employee.filter(h => h !== employee);
      this.empservice.deleteEmployee(employee).subscribe();
      swal("Good job!", "SuccessFully Deleted", "success") 
    }



  ngOnInit() {
    this.getemployees();
  }

}
