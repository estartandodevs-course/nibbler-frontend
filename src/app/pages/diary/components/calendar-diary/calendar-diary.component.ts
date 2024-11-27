import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-diary',
  templateUrl: './calendar-diary.component.html',
  styleUrl: './calendar-diary.component.scss',
})
export class CalendarDiaryComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
}
