import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor() { }

  getSubmitted() {
    return localStorage.getItem('submitted') === "true";
  }

  setSubmitted(submitted: boolean){
    localStorage.setItem('submitted', submitted.toString());
  }
}
