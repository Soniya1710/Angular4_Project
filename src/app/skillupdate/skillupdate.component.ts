import { Component, OnInit, Input } from '@angular/core';
import {Skills} from '../skills_model';
import {SkillsService} from '../skills.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-skillupdate',
  templateUrl: './skillupdate.component.html',
  styleUrls: ['./skillupdate.component.css']
})
export class SkillupdateComponent implements OnInit {
  @Input() skills: Skills;
  constructor( private route: ActivatedRoute,private skillsserve :SkillsService,private location: Location) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(): void {
    const employeeid = +this.route.snapshot.paramMap.get('employeeid');
    this.skillsserve.getid(employeeid)
    .subscribe(skills => this.skills = skills);
  }
  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.skillsserve.update(this.skills)
      .subscribe(() => this.goBack());
      swal("Good job!", "SuccessFully Updated", "success")
  }
}
