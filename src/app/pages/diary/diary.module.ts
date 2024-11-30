import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryRoutingModule } from './diary-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HomeDiaryComponent } from './components/home-diary/home-diary.component';
import { RegisterDiaryComponent } from './components/register-diary/register-diary.component';
import { CalendarDiaryComponent } from './components/calendar-diary/calendar-diary.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeDiaryComponent, RegisterDiaryComponent, CalendarDiaryComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    SharedModule,
  ],
})
export class DiaryModule {}
