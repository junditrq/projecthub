import { ShadcnButtonProps } from '@/components/ui/button';
import ActionButton from '../../ui/action-button';

const SignInButton = ({
  withWhat,
  icon,
  ...props
}: {
  withWhat?: string;
  icon?: React.ReactNode;
} & ShadcnButtonProps) => {
  return (
    <ActionButton className="!px-6" {...props}>
      <span>
        log in <span className="hidden sm:!inline">{withWhat}</span>
      </span>
      {icon}
    </ActionButton>
  );
};

export default SignInButton;
