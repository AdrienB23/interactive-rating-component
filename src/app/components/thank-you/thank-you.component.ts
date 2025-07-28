import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss',
  standalone: false,
})
export class ThankYouComponent implements OnInit{
  selectedRating!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const rateParam = params.get('rate');
      if (rateParam !== null) {
        this.selectedRating = +rateParam;
        if (this.selectedRating < 1 && this.selectedRating > 5) {
          this.router.navigate(['/home']);
        }
      }
    });
  }
}
