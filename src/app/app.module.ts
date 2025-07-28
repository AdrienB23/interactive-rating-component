import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ThankYouComponent} from './components/thank-you/thank-you.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgOptimizedImage} from '@angular/common';
import {GuardService} from './shared/services/guard.service';
import {RatingService} from './shared/services/rating.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    GuardService,
    RatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
