import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Trip } from '../data/trips';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {
  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: 0,
    image: '',
    description: ''
  };

  constructor(
    private tripDataService: TripData,
    private router: Router
  ) {}

  addTrip(): void {
    this.tripDataService.addTrip(this.newTrip).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err: unknown) => {
        console.error('Unable to add trip:', err);
      }
    });
  }
}