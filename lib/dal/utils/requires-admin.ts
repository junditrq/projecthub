import { cache } from 'react';
import { requiresAuth } from './requires-auth';
import { UserRoleDTO } from '@/core/application/dtos/user.dto';
import { forbidden } from 'next/navigation';

export const requiresAdmin = cache(async () => {
  const user = await requiresAuth();
  if (user.role !== UserRoleDTO.ADMIN) {
    forbidden();
  }
  return user;
});
