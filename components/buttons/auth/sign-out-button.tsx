'use client';
import { signOut } from 'next-auth/react';
import { ShadcnButtonProps } from '@/components/ui/button';
import ActionButton from '../ui/action-button';

const SignOutButton = ({ ...props }: ShadcnButtonProps) => {
  return (
    <ActionButton {...props} onClick={() => signOut({ redirectTo: '/' })}>
      Sign Out
    </ActionButton>
  );
};

export default SignOutButton;
