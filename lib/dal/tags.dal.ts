import container from "@/core/infra/di/container";

export const getTags = async () => {
  const getTagsUseCase = container.get("GetTagsUseCase");
  const { data } = await getTagsUseCase.execute();
  return data;
};
