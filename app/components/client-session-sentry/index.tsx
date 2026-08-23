'use client';

import { signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef } from 'react';

const ClientSessionSentry = ({ cb = () => {} }: { cb?: () => void }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cbRef = useRef(cb);

  useLayoutEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    if (searchParams.get('session') === 'expired') {
      signOut({ redirect: false }).then(() => {
        router.replace('/');
        cbRef.current();
      });
    }
  }, [searchParams, router]);

  return null;
};

export default ClientSessionSentry;
