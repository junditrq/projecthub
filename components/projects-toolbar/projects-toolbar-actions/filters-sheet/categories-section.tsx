import { getCategoriesAction } from "@/app/actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryDTO } from "@/core/application/dtos/category.dto";

export const CategoriesSection = async () => {
  const { data, serverError } = await getCategoriesAction();

  if (serverError) {
    throw serverError;
  }

  if (!data) {
    return;
  }

  return (
    <section className="p-4">
      <h3 className="mb-6 text-lg font-semibold">Categories</h3>

      <div className="flex flex-col gap-2">
        {data.map((category: CategoryDTO) => (
          <div className="flex items-center gap-3" key={category.id}>
            <Checkbox id={category.slug} className="h-5 w-5 border-2" />
            <Label
              htmlFor={category.slug}
              className="text-md w-full cursor-pointer font-normal"
            >
              {category.name}
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
};
