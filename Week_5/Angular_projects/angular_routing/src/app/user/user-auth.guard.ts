import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Implement your logic to check if the user is authenticated
  const isAuthenticated = true; // Replace with your actual authentication check

  if (isAuthenticated) {
    return true; // Allow access to the user route
  } else {
    // Redirect to the desired route (e.g., login page)
    router.navigate(['/login']);
    return false;
  }
};