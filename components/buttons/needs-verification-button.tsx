'use client';
import VerificationDialogContent from '@/app/components/initial-user-dialog/dialog-content';
import { Dialog } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Button, ShadcnButtonProps } from '../ui/button';

const NeedsVerificationButton = ({
  onClick,
  children,
  className,
  skeleton,
  disabled,
  ...props
}: ShadcnButtonProps & {
  skeleton?: React.ReactNode;
}) => {
  const { status, data } = useSession();
  const [open, setOpen] = useState(false);
  if (status === 'loading' && skeleton) return skeleton;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={(e) => {
          if (disabled || status === 'loading') {
            e.preventDefault();
            return;
          }

          if (data?.user.role !== 'student') {
            e.preventDefault();
            setOpen(true);
            return;
          } else if (onClick) {
            onClick(e);
          }
        }}
        className={cn(
          {
            'pointer-events-none opacity-50': disabled || status === 'loading',
          },
          className
        )}
        disabled={disabled || status === 'loading'}
        {...props}
      >
        {children}
      </Button>
      <VerificationDialogContent />
    </Dialog>
  );
};

export default NeedsVerificationButton;
