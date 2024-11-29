import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const PagesRouting: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pomodoro',
    loadChildren: () => import('./pomodoro/pomodoro.module').then((m) => m.PomodoroModule),
  },
  {
    path: 'diario',
    loadChildren: () => import('./pomodoro/pomodoro.module').then((m) => m.PomodoroModule),
  },
];

export { PagesRouting };
