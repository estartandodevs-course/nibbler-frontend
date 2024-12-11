import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryRoutingModule } from './diary-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HomeDiaryComponent } from './components/home-diary/home-diary.component';
import { RegisterDiaryComponent } from './components/register-diary/register-diary.component';
import { CalendarDiaryComponent } from './components/calendar-diary/calendar-diary.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { RegisterDetailComponent } from './components/register-detail/register-detail.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [HomeDiaryComponent, RegisterDiaryComponent, CalendarDiaryComponent, RegisterDetailComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    SharedModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }, // Configuração de idioma global
  ],
})
export class DiaryModule {}
