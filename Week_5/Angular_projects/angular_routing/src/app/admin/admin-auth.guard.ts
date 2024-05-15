// admin.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Implement your logic to check if the user has admin access
  const hasAdminAccess = true; // Replace with your actual logic

  if (hasAdminAccess) {
    return true; // Allow access to the admin route
  } else {
    // Redirect to the desired route (e.g., access denied page)
    router.navigate(['/access-denied']);
    return false;
  }
};

