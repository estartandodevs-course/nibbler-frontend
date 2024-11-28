import { Routes } from '@angular/router';

const PagesRouting: Routes = [
  {
    path: 'diario',
    loadChildren: () => import('./diary/diary.module').then((m) => m.DiaryModule),
  },
];

export { PagesRouting };
