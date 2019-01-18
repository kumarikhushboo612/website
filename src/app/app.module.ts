import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LivetechstudyNavbarComponent } from './livetechstudy-navbar/livetechstudy-navbar.component';
import { LivetechstudyHomeComponent } from './livetechstudy-home/livetechstudy-home.component';
import { LivetechstudyVideosComponent } from './livetechstudy-videos/livetechstudy-videos.component';
import { LivetechstudyLiveClassesComponent } from './livetechstudy-live-classes/livetechstudy-live-classes.component';
import { LivetechstudyContactComponent } from './livetechstudy-contact/livetechstudy-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LivetechstudyNavbarComponent,
    LivetechstudyHomeComponent,
    LivetechstudyVideosComponent,
    LivetechstudyLiveClassesComponent,
    LivetechstudyContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:LivetechstudyHomeComponent},
      {path:'contact', component:LivetechstudyContactComponent},
      {path:'videos', component:LivetechstudyVideosComponent},
      {path:'liveclasses', component:LivetechstudyLiveClassesComponent},
      {path:'**', component:LivetechstudyHomeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
