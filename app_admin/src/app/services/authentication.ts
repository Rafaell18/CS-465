import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: globalThis.Storage
  ) {}

  public login(user: User, password: string): Observable<AuthResponse> {
    return this.makeAuthApiCall('login', user, password);
  }

  public register(user: User, password: string): Observable<AuthResponse> {
    return this.makeAuthApiCall('register', user, password);
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  public getToken(): string {
    return this.storage.getItem('travlr-token') ?? '';
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));

    return payload.exp > (Date.now() / 1000);
  }

  private makeAuthApiCall(
    urlPath: string,
    user: User,
    password: string
  ): Observable<AuthResponse> {

    const formData = {
      name: user.name,
      email: user.email,
      password: password
    };

    return this.http.post<AuthResponse>(
      `${this.apiBaseUrl}/${urlPath}`,
      formData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }
}