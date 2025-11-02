const PageHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-4 border-b">
      <div className="mx-auto flex max-w-[90rem] justify-start px-4">
        <h1 className="border-r border-l p-4 text-lg font-bold tracking-wider uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};
export default PageHeading;
