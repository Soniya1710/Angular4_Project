import { Component, OnInit } from '@angular/core';

import {Skills} from '../skills_model';
import {SkillsService} from '../skills.service';

import { Observable, Subject} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
//import { Input } from '@angular/core';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-skillviewsearch',
  templateUrl: './skillviewsearch.component.html',
  styleUrls: ['./skillviewsearch.component.css']
})
export class SkillviewsearchComponent implements OnInit {



//@Input() skillv:Skills;

skillv:Skills[];
  constructor(private skillsserve :SkillsService,private route: ActivatedRoute) { }

 
  ngOnInit() {
   // this.skillv$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      //debounceTime(300),

      // ignore new term if same as previous term
     // distinctUntilChanged(),

      // switch to new search observable each time the term changes
      /*switchMap((term: string) => this.skillsserve.searchHeroes(term)),
    );*/
    // this.getAll();
  
  }

   /* getAll(): void {
  this.skillsserve.getAlls().subscribe(skillv => this.skillv = skillv);
   }*/
  /* getAll(): void {
    const skillType = +this.route.snapshot.paramMap.get('skillType');
    this.skillsserve.getid(skillType)
    .subscribe(skillv => this.skillv = skillv);
  }*/

  

  }


