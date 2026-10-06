import { UserX } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Forbidden() {
  return (
    <section className="grid grow place-items-center content-center px-4 text-center [&>h1]:max-w-[20ch]">
      <UserX className="text-primary size-20" strokeWidth={1.8} aria-hidden="true" />
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">403 Forbidden</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed sm:text-base">
        You don&apos;t have permission to access this page.
      </p>
      <Button asChild variant="link" className="mt-6">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </section>
  );
}
