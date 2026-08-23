import { signIn } from '@/auth';
import SignInButton from './sign-in-button';

const SignInButtonServer = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <SignInButton />
    </form>
  );
};

export default SignInButtonServer;
