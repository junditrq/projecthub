import { getTagsAction } from "@/app/actions";
import TagsFilter from "@/components/common/tags-filter";

export const TagsSection = async () => {
  const { data, serverError } = await getTagsAction();

  if (serverError) {
    throw serverError;
  }

  if (!data) {
    return;
  }

  return (
    <section className="p-4">
      <h3 className="mb-6 text-lg font-semibold">Tags</h3>

      <TagsFilter tags={data} />
    </section>
  );
};
