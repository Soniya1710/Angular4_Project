import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Skills} from './skills_model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import{SkillsComponent} from './skillmap/skillmap.component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillUrl ='http://localhost:8081/RestEmployeeProject/api/skillmap';  
  getAlls(): Observable<Skills[]> {
    
    return this.http.get<Skills[]>(this.skillUrl)
    
  }
  addservice (skill: Skills): Observable<Skills> {
        return this.http.post<Skills>(this.skillUrl+"/adding", skill, httpOptions);
    
  }
  deleteSkill (skills: Skills | number): Observable<Skills> {
   
    const id = typeof skills === 'number' ? skills : skills.employeeid;
    const url = `${this.skillUrl}/${id}`;

    return this.http.delete<Skills>(url, httpOptions)
  }
  update(empls:Skills): Observable<any> {
    return this.http.put(this.skillUrl,empls, httpOptions);
    
  }
   getid(employeeid: number): Observable<Skills> {
    const url = `${this.skillUrl}/${employeeid}`;
    return this.http.get<Skills>(url);
  }
 /* GET heroes whose name contains search term */
 searchHeroes(term: string): Observable<Skills[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Skills[]>(`${this.skillUrl}/?employeename=${term}`);
}

  constructor(private http: HttpClient) { }
}
 