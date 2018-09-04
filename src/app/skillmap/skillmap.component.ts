import { Component, OnInit } from '@angular/core';
import{Skills} from '../skills_model';

import{SkillsService} from '../skills.service';


@Component({
  selector: 'app-skillmap',
  templateUrl: './skillmap.component.html',
  styleUrls: ['./skillmap.component.css']
})
export class SkillsComponent implements OnInit {


 empl: Skills;

skillv:Skills[];

 constructor(private skillsserve:SkillsService) { }

  ngOnInit() 
  {
    this.getAll();
  }
getAll(): void {
  this.skillsserve.getAlls().subscribe(skillv => this.skillv = skillv);
}

add(employeeid:number,employeename:string,skillName:string,certification:string,studentHandle:number,studentPlaced:number): void {
  
   this.empl=new Skills();
   if(employeeid!=0)
   {

  this.empl.employeeid=employeeid;
  this.empl.employeename=employeename;
  this.empl.skillName=skillName;
  this.empl.certification=certification;
  this.empl.studentHandle=studentHandle;
  this.empl.studentPlaced=studentPlaced;
  

  
    this.skillsserve.addservice(this.empl)
      .subscribe(employee => {
        this.skillv.push(this.empl);
        swal("Good job!", "SuccessFully Added", "success")
      });
   }
  }

    delete(skills:Skills): void {
 
   this.skillv = this.skillv.filter(h => h !== skills);
     this.skillsserve.deleteSkill(skills).subscribe();
     swal("Good job!", "SuccessFully Deleted", "success")
 }
 

}