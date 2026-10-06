'use client';
import { ShadcnButtonProps } from '@/components/ui/button';
import SignInButton from '../ui/sign-in-button';
import GoogleIcon from './google-icon';
import { signIn } from 'next-auth/react';

export const SignInWithGoogleButton = ({
  redirectURL,
  ...props
}: {
  redirectURL?: string;
} & ShadcnButtonProps) => (
  <SignInButton
    withWhat={'Google'}
    icon={<GoogleIcon />}
    onClick={() =>
      signIn('google', {
        redirectTo: redirectURL,
      })
    }
    {...props}
  />
);
