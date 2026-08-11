import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Trip } from '../data/trips';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip!: Trip;

  constructor(
    public authenticationService: Authentication
  ) {}
}