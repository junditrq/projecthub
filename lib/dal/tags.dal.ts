import { TagDTO } from '@/core/application/dtos/tag.dto';
import container from '@/core/infra/di/container';

export const getTags = async (): Promise<TagDTO[]> => {
  const getTagsUseCase = container.get('GetTagsUseCase');
  return await getTagsUseCase.execute();
};
