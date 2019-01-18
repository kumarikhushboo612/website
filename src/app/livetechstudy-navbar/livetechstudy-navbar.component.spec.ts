import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetechstudyNavbarComponent } from './livetechstudy-navbar.component';

describe('LivetechstudyNavbarComponent', () => {
  let component: LivetechstudyNavbarComponent;
  let fixture: ComponentFixture<LivetechstudyNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetechstudyNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetechstudyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
