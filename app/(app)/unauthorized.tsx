import { SignInWithGoogleButton } from '@/components/buttons/auth/google/sign-in-with-google-button';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Unauthorized() {
  return (
    <section className="grid grow place-items-center content-center px-4 text-center [&>h1]:max-w-[20ch]">
      <Lock className="text-primary size-20" strokeWidth={1.8} aria-hidden="true" />
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">401 Unauthorized</h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed sm:text-base">
        Sign In to access this page.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3">
        <SignInWithGoogleButton />
        <Button asChild variant="link">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </section>
  );
}
