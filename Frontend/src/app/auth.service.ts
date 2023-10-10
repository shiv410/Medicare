import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://localhost:9090/user';

  isLoggedIn = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  login(email: string, password: string): Observable<any> {
    const body = {
      emailId: email,
      password: password
    };
    return this.http.post<any>(`${this.apiURL}/login`, body).pipe(
      tap(response => {
        if (response.role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (response.role === 'customer') {
          this.router.navigate(['/customer']);
        }
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }


  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiURL}/current`);
  }

  logout(): Observable<any> {
    this.isLoggedIn = false;
    return this.http.get(`${this.apiURL}/logout`);
  }

}
