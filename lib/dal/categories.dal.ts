import container from "@/core/infra/di/container";

export const getCategories = async () => {
  const getCategoriesUseCase = container.get("GetCategoriesUseCase");
  const { data } = await getCategoriesUseCase.execute();
  return data;
};
