import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDiaryComponent } from './components/home-diary/home-diary.component';
import { RegisterDiaryComponent } from './components/register-diary/register-diary.component';
import { CalendarDiaryComponent } from './components/calendar-diary/calendar-diary.component';
import { RegisterEditComponent } from './components/register-edit/register-edit.component';

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
    path: 'edit/:id',
    component: RegisterEditComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryRoutingModule {}
