import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetechstudyContactComponent } from './livetechstudy-contact.component';

describe('LivetechstudyContactComponent', () => {
  let component: LivetechstudyContactComponent;
  let fixture: ComponentFixture<LivetechstudyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetechstudyContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetechstudyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
