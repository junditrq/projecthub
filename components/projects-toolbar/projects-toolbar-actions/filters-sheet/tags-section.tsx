import { getTagsAction } from "@/app/(app)/actions";
import TagsFilter from "@/components/common/tags-filter";

export const TagsSection = async () => {
  const { data, serverError } = await getTagsAction();

  return (
    <section className="p-4">
      <h3 className="mb-6 text-lg font-semibold">Tags</h3>

      {serverError || !data ? (
        <p className="text-sm text-red-500">
          Failed to load tags. Please try again later.
        </p>
      ) : (
        <TagsFilter tags={data} />
      )}
    </section>
  );
};
