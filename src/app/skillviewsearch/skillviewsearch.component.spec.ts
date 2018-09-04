import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillviewsearchComponent } from './skillviewsearch.component';

describe('SkillviewsearchComponent', () => {
  let component: SkillviewsearchComponent;
  let fixture: ComponentFixture<SkillviewsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillviewsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillviewsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
