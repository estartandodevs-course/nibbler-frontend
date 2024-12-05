import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDiaryComponent } from './components/home-diary/home-diary.component';
import { RegisterDiaryComponent } from './components/register-diary/register-diary.component';
import { CalendarDiaryComponent } from './components/calendar-diary/calendar-diary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDiaryComponent,
  },
  {
    path: 'register',
    component: RegisterDiaryComponent,
  },
  {
    path: 'calendar',
    component: CalendarDiaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryRoutingModule {}
