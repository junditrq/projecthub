import Container from '@/components/common/container';
import NavTabBar from '@/components/nav-tabs/nav-tab-bar';
import NavTabItem from '@/components/nav-tabs/nav-tab-item';
import PageHeading from '@/components/page-heading';
import { requiresAuth } from '@/lib/dal/utils/requires-auth';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  await requiresAuth();
  return (
    <>
      <PageHeading title="Settings">
        <NavTabBar>
          <NavTabItem href="/settings">Profile</NavTabItem>
          <NavTabItem href="/settings/student-verification">Verification</NavTabItem>
        </NavTabBar>
      </PageHeading>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
