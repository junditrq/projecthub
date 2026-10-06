import { signIn } from '@/auth';
import { ShadcnButtonProps } from '@/components/ui/button';
import SignInButton from '../ui/sign-in-button';
import GoogleIcon from './google-icon';

export const SignInWithGoogleButton = ({ ...props }: ShadcnButtonProps) => (
  <form
    action={async () => {
      'use server';
      await signIn('google');
    }}
  >
    <SignInButton withWhat={'Google'} icon={<GoogleIcon />} {...props} />
  </form>
);
