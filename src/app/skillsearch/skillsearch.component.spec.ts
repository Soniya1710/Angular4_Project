import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsearchComponent } from './skillsearch.component';

describe('SkillsearchComponent', () => {
  let component: SkillsearchComponent;
  let fixture: ComponentFixture<SkillsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
