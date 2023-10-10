import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private apiurl = 'http://localhost:9090/user';


  register(user: any) {
    return this.http.post(`${this.apiurl}/register`, user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<User[]>(`${this.apiurl}/viewallusers`);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/${userId}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiurl}/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiurl}/${user.id}`, user);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiurl}/current`, { withCredentials: true });
  }

}
