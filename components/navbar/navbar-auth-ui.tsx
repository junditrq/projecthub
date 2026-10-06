import { SignInWithGoogleButton } from '../buttons/auth/google/sign-in-with-google-button';
import AvatarDropdown from './avatar-dropdown';
import { auth } from '@/auth';

const NavbarAuthUI = async () => {
  const session = await auth();
  if (!session?.user) {
    return <SignInWithGoogleButton />;
  }

  return <AvatarDropdown user={session.user} />;
};

export default NavbarAuthUI;
