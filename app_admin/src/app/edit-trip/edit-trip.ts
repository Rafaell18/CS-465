import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import { Trip } from '../data/trips';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {
  trip: Trip = {
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
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripData,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const tripCode =
      this.route.snapshot.paramMap.get('tripCode');

    if (!tripCode) {
      console.error('No trip code was provided.');
      return;
    }

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value: Trip) => {
        this.trip = {
          ...value,
          start: value.start
            ? value.start.substring(0, 10)
            : ''
        };

        this.changeDetector.detectChanges();
      },
      error: (err: unknown) => {
        console.error('Unable to load trip:', err);
      }
    });
  }

  updateTrip(): void {
    this.tripDataService.updateTrip(this.trip).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err: unknown) => {
        console.error('Unable to update trip:', err);
      }
    });
  }
}