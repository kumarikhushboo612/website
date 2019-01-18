import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetechstudyLiveClassesComponent } from './livetechstudy-live-classes.component';

describe('LivetechstudyLiveClassesComponent', () => {
  let component: LivetechstudyLiveClassesComponent;
  let fixture: ComponentFixture<LivetechstudyLiveClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetechstudyLiveClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetechstudyLiveClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
