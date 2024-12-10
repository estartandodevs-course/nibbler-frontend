import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDiaryComponent } from './components/home-diary/home-diary.component';
import { RegisterDiaryComponent } from './components/register-diary/register-diary.component';
import { CalendarDiaryComponent } from './components/calendar-diary/calendar-diary.component';
import { RegisterDetailComponent } from './components/register-detail/register-detail.component';

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
  {
    path: 'detail',
    component: RegisterDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryRoutingModule {}
