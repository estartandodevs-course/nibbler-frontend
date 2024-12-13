import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRouting } from './pages/routing';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
// import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: WelcomeComponent,
  // },
  {
    path: 'cadastro',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: LayoutComponent,
    children: PagesRouting,
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
