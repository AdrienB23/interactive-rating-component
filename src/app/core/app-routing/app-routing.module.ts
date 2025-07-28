import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../components/home/home.component';
import {ThankYouComponent} from '../../components/thank-you/thank-you.component';
import {GuardService} from '../../shared/services/guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'thank-you/:rate', component: ThankYouComponent, title: 'Thank You', canActivate: [GuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
