import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from '../../services/custom-date-formatter.service';
import { EventColor } from 'calendar-utils';
import { isSameDay, isSameMonth } from 'date-fns';
import { CalendarRestService } from '../../services/calendar-rest.service';
import { IApiResponseReflexoes, IReflexao } from '../../models/calendarInterface';
import { Router } from '@angular/router';

const colors: Record<string, EventColor> = {
  feliz: { primary: '#1FC16B', secondary: '#E3FAE3' },
  horrível: { primary: '#D00416', secondary: '#fae3e3' },
  neutro: { primary: '#69563A', secondary: '#faede3' },
  ansioso: { primary: '#FFEB36', secondary: '#f9fae3' },
  triste: { primary: '#E23500', secondary: '#fae3e3' },
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
export class CalendarDiaryComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  diaryData: IReflexao | null = null;
  availableEmotions = ['feliz', 'triste', 'horrível', 'ansioso', 'neutro'];

  constructor(
    private _http: CalendarRestService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadReflections();
  }

  loadReflections() {
    this._http.getAllRegisters().subscribe({
      next: (response: IApiResponseReflexoes) => {
        if (response.sucess && response.data.length > 0) {
          this.populateCalendarEvents(response.data);
        } else {
          console.warn('Nenhuma reflexão encontrada.');
        }
      },
      error: (error) => console.error('Erro ao buscar registros:', error),
    });
  }

  populateCalendarEvents(reflections: IReflexao[]) {
    this.events = reflections.map((reflexao) => {
      const [datePart, timePart] = reflexao.dataDeCadastro.split(' ');
      const [day, month, year] = datePart.split('/');
      const formattedDate = `${year}-${month}-${day}T${timePart}`;

      return {
        start: new Date(formattedDate), // Data no formato ISO
        title: reflexao.conteudo,
        color: colors[reflexao.emocao.nome.toLowerCase()] || colors['neutro'],
        meta: reflexao, // Armazena os dados para o modal
      };
    });

    console.log(this.events); // Para verificar o resultado
  }

  isSameDay = isSameDay;

  activeDayIsOpen: boolean = false; // Aba inicialmente fechada

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen) || events.length === 0) {
        this.activeDayIsOpen = false;
        this.diaryData = null;
      } else {
        this.activeDayIsOpen = true;
        this.diaryData = events[0]?.meta || null;
        console.log('Diário Selecionado:', this.diaryData);
      }
      this.viewDate = date; // Atualiza a data visualizada
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  goToCurrentMonth(): void {
    this.viewDate = new Date(); // Atualiza a visualização para o mês atual
  }
}
