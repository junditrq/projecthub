'use client';

import { Dialog } from '@/components/ui/dialog';
import { markUserAsPromptedAction } from '@/lib/actions/user.actions';
import { useSession } from 'next-auth/react';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useRef, useState } from 'react';
import VerificationDialogContent from './dialog-content';

const InitialUserDialog = () => {
  const [open, setOpen] = useState(false);
  const { status, data, update } = useSession();
  const attemptedForRef = useRef<string | null>(null);

  const { execute, hasSucceeded, hasErrored, isExecuting } = useAction(markUserAsPromptedAction, {
    onSuccess: () => {
      update({
        hasBeenPrompted: true,
      });
    },
    onError: () => {
      console.error('Failed to mark user as prompted');
    },
  });

  const userId = data?.user?.id;
  const hasBeenPrompted = data?.user?.hasBeenPrompted;

  useEffect(() => {
    if (status !== 'authenticated' || !userId || hasBeenPrompted) return;
    if (attemptedForRef.current === userId || isExecuting || hasSucceeded || hasErrored) return;
    attemptedForRef.current = userId;
    setOpen(true);
    execute();
  }, [status, userId, hasBeenPrompted, execute, isExecuting, hasSucceeded, hasErrored]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <VerificationDialogContent />
    </Dialog>
  );
};
export default InitialUserDialog;
