import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePomodoroComponent } from './home-pomodoro/home-pomodoro.component';
import { TimerPomodoroComponent } from './timer-pomodoro/timer-pomodoro.component';

const routes: Routes = [
  {
    path: '',
    component: HomePomodoroComponent,
  },
  {
    path: 'timer',
    component: TimerPomodoroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PomodoroRoutingModule {}
