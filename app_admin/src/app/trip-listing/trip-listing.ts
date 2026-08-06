import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { Trip } from '../data/trips';
import { TripData } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  imports: [TripCard, RouterLink],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
  trips: Trip[] = [];

  constructor(
    private tripDataService: TripData,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
        this.changeDetector.detectChanges();
      },
      error: (err: unknown) => {
        console.error('Unable to load trips:', err);
      }
    });
  }
}