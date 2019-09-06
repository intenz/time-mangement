import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { StudyComponent } from './study/study.component';
import { TimerComponent } from './timer/timer.component';
import { TimerPipe } from './timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    StudyComponent,
    TimerComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
