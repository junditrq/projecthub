import TagsFilter from '@/components/common/tags-filter';
import { getTags } from '@/lib/dal/tags.dal';

export const TagsSection = async () => {
  const data = await getTags();

  return (
    <section className="p-4">
      <h3 className="mb-6 text-lg font-semibold">Tags</h3>
      <TagsFilter tags={data} />
    </section>
  );
};
