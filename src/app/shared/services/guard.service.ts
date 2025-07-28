import { Injectable } from '@angular/core';
import {RatingService} from './rating.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private ratingService: RatingService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const isSubmitted = this.ratingService.getSubmitted();
    console.log('Guard check, submitted:', isSubmitted);

    if (!isSubmitted) {
      this.router.navigate(['/home']); // ✅ Redirection si non autorisé
      return false;
    }

    return true;
  }
}
