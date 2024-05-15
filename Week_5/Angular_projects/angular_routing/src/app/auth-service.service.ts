import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // replace with your authentication logic
  private userRole: 'admin' | 'user' = 'user'; // replace with your role management logic

  constructor() { }

  isAdmin(): boolean {
    //return this.userRole === 'admin';
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}