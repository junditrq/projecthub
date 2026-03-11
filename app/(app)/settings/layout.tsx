import Container from "@/components/common/container";
import PageHeading from "@/components/page-heading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageHeading title="Settings">
        <div className="ms-auto h-full space-x-6 overflow-x-auto">
          <span>test</span>
          <span>testing</span>
          <span>whatever</span>
        </div>
      </PageHeading>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
