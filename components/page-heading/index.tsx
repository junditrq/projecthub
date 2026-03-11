const PageHeading = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="mb-4 border-b">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4">
        <h1 className="border-r border-l p-4 text-lg font-bold tracking-wider uppercase">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};
export default PageHeading;
