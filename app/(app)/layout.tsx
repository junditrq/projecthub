import NavBar from '@/components/navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-dvh flex-col">
      <NavBar />
      <main className="flex grow flex-col pb-10">{children}</main>
    </div>
  );
};

export default Layout;
