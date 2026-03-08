import TagsFilter from "@/components/common/tags-filter";

export const TagsSection = () => {
  return (
    <section className="p-4">
      <h3 className="mb-6 text-lg font-semibold">Tags</h3>

      <TagsFilter tags={[]} />
    </section>
  );
};
