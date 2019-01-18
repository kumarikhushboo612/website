import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetechstudyVideosComponent } from './livetechstudy-videos.component';

describe('LivetechstudyVideosComponent', () => {
  let component: LivetechstudyVideosComponent;
  let fixture: ComponentFixture<LivetechstudyVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetechstudyVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetechstudyVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
