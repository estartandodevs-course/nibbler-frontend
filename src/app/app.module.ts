import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RegistrationComponent } from './pages/registration/registration.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RegistrationComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule, MatStepperModule, ReactiveFormsModule, HttpClientModule],
  providers: [provideAnimationsAsync(), provideAnimationsAsync('noop')],
  bootstrap: [AppComponent],
})
export class AppModule {}
