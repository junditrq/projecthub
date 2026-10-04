import { ITagRepo } from '@/core/domain/repos/tag.repo';
import { TagDTO } from '../../dtos/tag.dto';
import { TagDTOMapper } from '../../mappers/tag.mapper';

export class GetTagsUseCase {
  constructor(private readonly _tagRepo: ITagRepo) {}

  public async execute(): Promise<TagDTO[]> {
    const tags = await this._tagRepo.findAll();
    return tags.map(TagDTOMapper.toDTO);
  }
}
