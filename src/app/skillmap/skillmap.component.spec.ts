import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmapComponent } from './skillmap.component';

describe('SkillmapComponent', () => {
  let component: SkillmapComponent;
  let fixture: ComponentFixture<SkillmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
