import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from './EmployeeModel';
import {EMPLOYEES} from './EmployeeList';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService 
{
  constructor(private http: HttpClient) 
  {}
    private restUrl='http://localhost:8081/RestEmployeeProject/api/angular4';
  
   
  getEmployees(): Observable<EmployeeModel[]> {
   return this.http.get<EmployeeModel[]>(this.restUrl);
  }
  addservice (employeee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.restUrl, employeee, httpOptions); 

}
 
deleteEmployee (employee: EmployeeModel | number): Observable<EmployeeModel> {
  const id = typeof employee === 'number' ? employee : employee.employeeid;
  const url = `${this.restUrl}/${id }`;

  return this.http.delete<EmployeeModel>(url, httpOptions)
}

updateEmployee (employee:EmployeeModel): Observable<any> {
  return this.http.put(this.restUrl,employee, httpOptions);
  
}

 getid(employeeid: number): Observable<EmployeeModel> {
  const url = `${this.restUrl}/${employeeid}`;
  return this.http.get<EmployeeModel>(url);
}
}