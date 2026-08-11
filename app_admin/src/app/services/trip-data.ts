import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../data/trips';
import { Authentication } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private authenticationService: Authentication
  ) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(
      `${this.apiBaseUrl}/trips`
    );
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(
      `${this.apiBaseUrl}/trips/${tripCode}`
    );
  }

  addTrip(trip: Trip): Observable<Trip> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authenticationService.getToken()}`
    });

    return this.http.post<Trip>(
      `${this.apiBaseUrl}/trips`,
      trip,
      { headers }
    );
  }

  updateTrip(trip: Trip): Observable<Trip> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authenticationService.getToken()}`
    });

    return this.http.put<Trip>(
      `${this.apiBaseUrl}/trips/${trip.code}`,
      trip,
      { headers }
    );
  }
}