import { Component, OnInit } from '@angular/core';

import {SkillsService} from '../skills.service';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import {Skills} from '../skills_model';

@Component({
  selector: 'app-skillsearch',
  templateUrl: './skillsearch.component.html',
  styleUrls: ['./skillsearch.component.css']
})
export class SkillsearchComponent implements OnInit {

 skillv$: Observable<Skills[]>;
  private searchTerms = new Subject<string>();


  constructor(private skillsserve :SkillsService) { }


 // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.skillv$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.skillsserve.searchHeroes(term)),
    );
  }

}
