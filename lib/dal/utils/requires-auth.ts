import { auth } from '@/auth';
import { unauthorized } from 'next/navigation';
import { cache } from 'react';
import 'server-only';

export const requiresAuth = cache(async () => {
  const session = await auth();

  if (!session?.user) {
    unauthorized();
  }

  return session.user;
});
