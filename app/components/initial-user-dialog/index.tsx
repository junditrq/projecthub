'use client';

import { Dialog } from '@/components/ui/dialog';
import { markUserAsPromptedAction } from '@/lib/actions/user.actions';
import { useSession } from 'next-auth/react';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useState } from 'react';
import VerificationDialogContent from './dialog-content';

const InitialUserDialog = () => {
  const [open, setOpen] = useState(false);
  const { status, data, update } = useSession();

  const { execute, hasSucceeded, isExecuting } = useAction(markUserAsPromptedAction, {
    onSuccess: () => {
      update({
        hasBeenPrompted: true,
      });
    },
  });

  useEffect(() => {
    if (status !== 'authenticated' || !data.user) return;
    if (!data.user.hasBeenPrompted && !isExecuting && !hasSucceeded) {
      setOpen(true);
      execute();
    }
  }, [status, data, execute, isExecuting, hasSucceeded]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <VerificationDialogContent />
    </Dialog>
  );
};
export default InitialUserDialog;
