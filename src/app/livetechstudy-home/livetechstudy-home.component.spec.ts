import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetechstudyHomeComponent } from './livetechstudy-home.component';

describe('LivetechstudyHomeComponent', () => {
  let component: LivetechstudyHomeComponent;
  let fixture: ComponentFixture<LivetechstudyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetechstudyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetechstudyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
