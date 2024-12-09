import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PomodoroRoutingModule } from './pomodoro-routing.module';

import { TimerPomodoroComponent } from './timer-pomodoro/timer-pomodoro.component';
import { HomePomodoroComponent } from './home-pomodoro/home-pomodoro.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TimerPomodoroComponent, HomePomodoroComponent],
  imports: [CommonModule, PomodoroRoutingModule, SharedModule],
})
export class PomodoroModule {}
