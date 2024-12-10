import { Component, ViewEncapsulation } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from '../../services/custom-date-formatter.service';
import { EventColor } from 'calendar-utils';
import { isSameDay, isSameMonth, startOfDay, subDays } from 'date-fns';

const colors: Record<string, EventColor> = {
  happy: {
    primary: '#1FC16B',
    secondary: '#E3FAE3',
  },
  good: {
    primary: '#66C2D8',
    secondary: '#e3faf9',
  },
  neutral: {
    primary: '#69563A',
    secondary: '#faede3',
  },
  anxious: {
    primary: '#FFEB36',
    secondary: '#f9fae3',
  },
  sad: {
    primary: '#E23500',
    secondary: '#fae3e3',
  },
  horrible: {
    primary: '#D00416',
    secondary: '#fae3e3',
  },
};

@Component({
  selector: 'app-calendar-diary',
  templateUrl: './calendar-diary.component.html',
  styleUrl: './calendar-diary.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter, // Substitui o formato padrão
    },
  ],
})
export class CalendarDiaryComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'Evento de 3 dias',
      color: { ...colors['good'] }, // Cor para o evento
    },
    {
      start: subDays(startOfDay(new Date()), 4),
      title: 'Evento de 3 dias',
      color: { primary: '#ad2121', secondary: '#FAE3E3' }, // Cor para o evento
    },
    {
      start: startOfDay(new Date()),
      title: 'Evento Hoje',
      color: { primary: '#1e90ff', secondary: '#D1E8FF' },
    },
    {
      start: startOfDay(new Date()),
      title: 'Evento Hoje',
      color: { primary: '#fff', secondary: '#000' },
    },
  ];

  isSameDay = isSameDay;

  activeDayIsOpen: boolean = false; // Aba inicialmente fechada
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  goToCurrentMonth(): void {
    this.viewDate = new Date(); // Atualiza a visualização para o mês atual
  }
}
