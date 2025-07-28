import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RatingService} from '../../shared/services/rating.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit {
  ratings = [
    1,
    2,
    3,
    4,
    5
  ]

  selectedRating?: number;

  constructor(private ratingService: RatingService,  private router: Router) {
  }

  ngOnInit() {
    this.ratingService.setSubmitted(false);
  }

  submit() {
    if (this.selectedRating) {
      this.ratingService.setSubmitted(true);
      this.router.navigate(['/thank-you/' + this.selectedRating]);
    } else {
      this.ratingService.setSubmitted(false);
    }
  }
}
