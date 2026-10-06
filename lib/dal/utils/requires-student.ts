import { cache } from 'react';
import { requiresAuth } from './requires-auth';
import { redirect } from 'next/navigation';

export const requiresStudent = cache(async () => {
  const user = await requiresAuth();
  if (!user.isStudent) {
    redirect('/settings/student-verification');
  }
  return user;
});
