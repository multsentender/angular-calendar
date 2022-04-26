import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { MomentPipe } from './shared/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    TasksComponent,
    MomentPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    CalendarComponent,
    TasksComponent
  ]
})
export class AppModule { }
